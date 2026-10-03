import type { Node } from "oxc-parser"
import { walk } from "oxc-walker"

export class AbortError extends Error {}

export function abort(): never {
    throw new AbortError()
}

/** Whether something inside of the node assigns to the variable: `name = 1`, `name++` */
export function isReassigned(node: Node, name: string): boolean {
    let result = false
    walk(node, {
        enter(node) {
            if (node.type === "AssignmentExpression" && node.left.type !== "Identifier") {
                // Patterns: [name] = list
                walk(node.left, {
                    enter(target, parent) {
                        if (target.type !== "Identifier" || target.name !== name) return
                        if (parent?.type === "MemberExpression" || (parent?.type === "Property" && parent.key === target && parent.value !== target)) return
                        result = true
                    },
                })
            }
            else if (node.type === "AssignmentExpression" && node.left.type === "Identifier" && node.left.name === name) {
                result = true
            }
            else if (node.type === "UpdateExpression" && node.argument.type === "Identifier" && node.argument.name === name) {
                result = true
            }
        },
    })
    return result
}
