import type { Dll } from "."
import { at } from "./at"
import { unlink } from "./unlink"

/**
 * # removeAt
 *
 * ```ts
 * function Dll.removeAt(dll: Dll<T>, offset: number): T | undefined
 * ```
 *
 * Removes and returns the element at a specific index, supporting negative indices.
 *
 * ## Example
 *
 * ```ts
 * import { Dll } from "@monstermann/fn";
 *
 * const dll = Dll.create<number>([1, 2, 3, 4]);
 * const removed = Dll.removeAt(dll, 1);
 * console.log(removed); // 2
 * // List is now: [1, 3, 4]
 *
 * const lastRemoved = Dll.removeAt(dll, -1);
 * console.log(lastRemoved); // 4
 * ```
 *
 */
export function removeAt<T>(dll: Dll<T>, offset: number): T | undefined {
    const link = at(dll, offset)
    if (link) unlink(dll, link)
    return link?.value
}
