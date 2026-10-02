import type { Dll, DllLink } from "."
import { at } from "./at"

/**
 * # setAt
 *
 * ```ts
 * function Dll.setAt(dll: Dll<T>, offset: number, value: T): DllLink<T> | undefined
 * ```
 *
 * Sets the value at a specific index in the doubly-linked list, supporting negative indices.
 *
 * ## Example
 *
 * ```ts
 * import { Dll } from "@monstermann/fn";
 *
 * const dll = Dll.create<number>([1, 2, 3, 4]);
 * Dll.setAt(dll, 1, 20);
 * // List is now: [1, 20, 3, 4]
 *
 * Dll.setAt(dll, -1, 40);
 * // List is now: [1, 20, 3, 40]
 * ```
 *
 */
export function setAt<T>(
    dll: Dll<T>,
    offset: number,
    value: NoInfer<T>,
): DllLink<T> | undefined {
    const link = at(dll, offset)
    if (link) link.value = value
    return link
}
