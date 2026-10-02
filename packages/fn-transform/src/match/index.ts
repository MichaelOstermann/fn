import type { Node } from "oxc-parser"
import type { Context } from "./types"
import MagicString from "magic-string"
import { parseSync } from "oxc-parser"
import { walk } from "oxc-walker"
import { collectBranches } from "./collectBranches"
import { transformMatch } from "./transformMatch"
import { transformShape } from "./transformShape"

export interface MatchResult {
    /** Whether every usage of `match` has been compiled away. */
    isUnused: boolean
    ms: MagicString
}

/**
 * Compiles `match(value).case(…).or(…)` chains into conditional expressions:
 *
 * ```ts
 * match(value).case(1, "one").or("other")
 * ```
 *
 * ```ts
 * (value === (1)) ? ("one") : ("other")
 * ```
 *
 * Returns `undefined` when `match` has not been imported from `from`.
 */
export function transformMatches(code: string, filePath: string, from: string): MatchResult | undefined {
    const { program } = parseSync(filePath, code)
    const local = findLocalName(program.body, from)
    if (!local) return

    let ids: Set<string> | undefined
    let references = 0
    let transformed = 0

    const ctx: Context = {
        code,
        filePath,
        ms: new MagicString(code, { filename: filePath }),
        id(base: string): string {
            let count = 0
            const ids = this.ids
            while (ids.has(`${base}${count}`)) {
                count++
            }
            this.ids.add(`${base}${count}`)
            return `${base}${count}`
        },
        get ids() {
            if (ids) return ids
            ids = new Set<string>()
            walk(program, {
                enter(node) {
                    if (node.type !== "Identifier") return
                    ids!.add(node.name)
                },
            })
            return ids
        },
    }

    walk(program, {
        enter(node, parent) {
            if (node.type === "ImportDeclaration") return this.skip()
            if (node.type === "Identifier" && node.name === local && !isPropertyName(node, parent)) references++
            const branches = collectBranches(node, local)
            if (!branches) return
            if (transformShape(node, branches, parent ?? undefined, ctx) || transformMatch(node, branches, parent ?? undefined, ctx)) {
                transformed++
                // The chain has been replaced as a whole, chains nested in its callbacks are kept as they are.
                references += countReferences(node, local)
                this.skip()
            }
        },
    })

    return {
        isUnused: transformed > 0 && references === transformed,
        ms: ctx.ms,
    }
}

/** `import { match as foo } from "from"` → `"foo"` */
function findLocalName(statements: Node[], from: string): string | undefined {
    for (const node of statements) {
        if (node.type !== "ImportDeclaration" || node.importKind === "type" || node.source.value !== from) continue
        for (const specifier of node.specifiers) {
            if (specifier.type !== "ImportSpecifier" || specifier.importKind === "type") continue
            if (specifier.imported.type === "Identifier" && specifier.imported.name === "match") return specifier.local.name
        }
    }
    return undefined
}

function isPropertyName(node: Node, parent: Node | null): boolean {
    if (parent?.type === "MemberExpression") return parent.property === node && !parent.computed
    if (parent?.type === "Property") return parent.key === node && !parent.computed && !parent.shorthand
    return false
}

function countReferences(node: Node, local: string): number {
    let count = 0
    walk(node, {
        enter(node, parent) {
            if (node.type === "Identifier" && node.name === local && !isPropertyName(node, parent)) count++
        },
    })
    return count
}
