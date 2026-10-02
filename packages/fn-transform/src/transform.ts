import type { SourceMap } from "magic-string"
import remapping from "@jridgewell/remapping"
import { transform as treeshake } from "@monstermann/barrels-treeshake"
import { SourceMap as MagicSourceMap } from "magic-string"
import { transformImports } from "./imports"
import { namespaces } from "./manifest"
import { transformMatches } from "./match"

const from = "@monstermann/fn"

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
 * - `Arr.map()` becomes a direct import of `map`
 * - `match()` chains are compiled into conditional expressions
 * - everything else is imported from the file it lives in
 *
 * Returns `undefined` when nothing changed.
 */
export function transform(code: string, filePath: string, options: FnOptions = {}): FnResult | undefined {
    // Nothing to do when the package is not mentioned, skip parsing.
    if (!code.includes(from)) return

    const maps: SourceMap[] = []
    const unused = new Set<string>()
    const generateMap = { hires: "boundary", includeContent: true, source: filePath } as const

    const matches = transformMatches(code, filePath, from)
    if (matches?.ms.hasChanged()) {
        if (matches.isUnused) unused.add("match")
        code = matches.ms.toString()
        maps.push(matches.ms.generateMap(generateMap))
    }

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
