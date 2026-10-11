import type { SourceMap } from "magic-string"
import type { Helpers } from "./match"
import remapping from "@jridgewell/remapping"
import { transform as treeshake } from "@monstermann/barrels-treeshake"
import { SourceMap as MagicSourceMap } from "magic-string"
import { transformGlobals } from "./globals"
import { globals, values } from "./globals.manifest"
import { transformImports } from "./imports"
import { guards, namespaces } from "./manifest"
import { transformMatches } from "./match"
import { transformPipes } from "./pipe"

const from = "@monstermann/fn"

const globalsOptions = {
    globals,
    guards: guards.map(name => `${from}/${name}`),
    values: Object.fromEntries(Object.entries(values).map(([name, file]) => [name, `${from}/${file}.mjs`])),
    resolve: (global: string, name: string): string => `${from}/${global}/${name}.mjs`,
}

export interface FnOptions {
    /** Prints what is being replaced. */
    debug?: boolean
}

export interface FnResult {
    code: string
    map: SourceMap
}

/**
 * Makes using `@monstermann/fn` free:
 *
 * - `Array.removeAll()` and `Rect.area()` become direct imports of `removeAll` and `area`
 * - `match()` chains are compiled into conditional expressions
 * - `pipe()` calls are replaced with the calls they make
 * - everything else (`pipe`, `Result`, …) is imported from the file it lives in
 *
 * All of it is available as globals, and can be imported from the package as well.
 *
 * Returns `undefined` when nothing changed.
 */
export function transform(code: string, filePath: string, options: FnOptions = {}): FnResult | undefined {
    const maps: SourceMap[] = []
    const unused = new Set<string>()
    const generateMap = { hires: "boundary", includeContent: true, source: filePath } as const
    const imported = code.includes(from)

    // Chains inside of the callbacks of another chain are compiled by another run.
    if (imported || code.includes("match")) {
        const helpers: Helpers = {}
        for (let matches = transformMatches(code, filePath, from, helpers); matches?.ms.hasChanged(); matches = transformMatches(code, filePath, from, helpers)) {
            for (const name of matches.unused) unused.add(name)
            code = matches.ms.toString()
            maps.push(matches.ms.generateMap(generateMap))
        }
    }

    // After chains: what they are compiled into is passed along like everything else.
    if (code.includes("pipe")) {
        let replaced = false
        for (let pipes = transformPipes(code, filePath, from); ; pipes = transformPipes(code, filePath, from)) {
            if (!pipes.ms.hasChanged()) {
                // Dropping an import by its name would drop the others of that name.
                if (replaced && !pipes.references && pipes.imports === 1) unused.add("pipe")
                break
            }
            replaced = true
            code = pipes.ms.toString()
            maps.push(pipes.ms.generateMap(generateMap))
        }
    }

    // Nothing has been imported when the package is not mentioned, skip parsing.
    if (imported) {
        const shaken = treeshake(code, filePath, {
            debug: options.debug,
            resolve({ importAlias, importName, importPath, propertyName }) {
                if (importPath !== from || !importName || !namespaces.has(importName)) return
                return `import { ${propertyName} as ${importAlias} } from "${from}/${importName}/${propertyName}.mjs";`
            },
        })
        if (shaken) {
            code = shaken.code
            maps.push(shaken.map)
        }

        const imports = transformImports(code, filePath, from, unused)
        if (imports.hasChanged()) {
            code = imports.toString()
            maps.push(imports.generateMap(generateMap))
        }
    }

    // After everything else: what is left of `match` once chains have been compiled is what needs to be imported.
    const replaced = transformGlobals(code, filePath, globalsOptions)
    if (replaced) {
        code = replaced.toString()
        maps.push(replaced.generateMap(generateMap))
    }

    if (!maps.length) return

    return {
        code,
        get map() {
            if (maps.length === 1) return maps[0]!
            // Sourcemaps are combined in reverse order.
            return new MagicSourceMap(remapping(maps.toReversed() as never, () => null, { decodedMappings: true }) as never)
        },
    }
}
