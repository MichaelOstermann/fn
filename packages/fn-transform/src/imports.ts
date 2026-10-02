import MagicString from "magic-string"
import { parseSync } from "oxc-parser"
import { files, namespaces } from "./manifest"

/**
 * Points what is left of the imports from `from` at the files they are exported from,
 * so the entry of the package, which imports everything, is never loaded:
 *
 * ```ts
 * import { pipe, Arr, type Rect } from "@monstermann/fn";
 * ```
 *
 * ```ts
 * import type { Rect } from "@monstermann/fn";
 * import { pipe } from "@monstermann/fn/dfdl/pipe.mjs";
 * import { Arr } from "@monstermann/fn/Arr/index.mjs";
 * ```
 */
export function transformImports(code: string, filePath: string, from: string, unused: ReadonlySet<string>): MagicString {
    const ms = new MagicString(code, { filename: filePath })

    for (const node of parseSync(filePath, code).program.body) {
        if (node.type !== "ImportDeclaration" || node.importKind === "type" || node.source.value !== from) continue
        // import * as Fn from "@monstermann/fn"
        if (!node.specifiers.length || node.specifiers.some(specifier => specifier.type !== "ImportSpecifier")) continue

        const types: string[] = []
        const rest: string[] = []
        const imports: string[] = []

        for (const specifier of node.specifiers) {
            if (specifier.type !== "ImportSpecifier") continue
            const name = specifier.imported.type === "Identifier" ? specifier.imported.name : specifier.imported.value
            const text = code.slice(specifier.imported.start, specifier.end)
            if (specifier.importKind === "type") types.push(text)
            else if (unused.has(name)) continue
            else if (namespaces.has(name)) imports.push(`import { ${text} } from "${from}/${name}/index.mjs";`)
            else if (name in files) imports.push(`import { ${text} } from "${from}/${files[name]}.mjs";`)
            else rest.push(text)
        }

        if (rest.length === node.specifiers.length) continue
        if (rest.length) imports.unshift(`import { ${rest.join(", ")} } from "${from}";`)
        if (types.length) imports.unshift(`import type { ${types.join(", ")} } from "${from}";`)
        ms.overwrite(node.start, node.end, imports.join("\n"))
    }

    return ms
}
