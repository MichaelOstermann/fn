import type { Dll } from "."
import { unlink } from "./unlink"

/**
 * # empty
 *
 * ```ts
 * function Dll.empty(dll: Dll<T>): void
 * ```
 *
 * Removes all elements from a doubly-linked list, clearing it completely.
 *
 * ## Example
 *
 * ```ts
 * import { Dll } from "@monstermann/fn";
 *
 * const dll = Dll.create<number>([1, 2, 3]);
 * Dll.empty(dll);
 * // List is now: []
 * ```
 *
 */
export function empty<T>(dll: Dll<T>): void {
    let pivot = dll.head
    while (pivot) {
        unlink(dll, pivot)
        pivot = pivot.next
    }
}
