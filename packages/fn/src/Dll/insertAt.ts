import type { Dll, DllLink } from "."
import { append } from "./append"
import { at } from "./at"
import { insertBefore } from "./insertBefore"
import { prepend } from "./prepend"

/**
 * # insertAt
 *
 * ```ts
 * function Dll.insertAt(dll: Dll<T>, offset: number, value: T): DllLink<T> | undefined
 * ```
 *
 * Inserts a value at a specific index in the doubly-linked list, supporting negative indices.
 *
 * ## Example
 *
 * ```ts
 * import { Dll } from "@monstermann/fn";
 *
 * const dll = Dll.create<number>([1, 2, 4]);
 * Dll.insertAt(dll, 2, 3);
 * // List is now: [1, 2, 3, 4]
 *
 * // Negative indices count from the end
 * Dll.insertAt(dll, -1, 5);
 * // List is now: [1, 2, 3, 5, 4]
 * ```
 *
 */
export function insertAt<T>(dll: Dll<T>, offset: number, value: NoInfer<T>): DllLink<T> | undefined {
    const index = offset < 0 ? dll.size + offset : offset
    if (index === 0) return prepend(dll, value)
    if (index === dll.size) return append(dll, value)
    const link = at(dll, offset)
    return link ? insertBefore(dll, link, value) : undefined
}
