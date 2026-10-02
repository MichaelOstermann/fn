import type { Dll } from "."
import { unlink } from "./unlink"

/**
 * # remove
 *
 * ```ts
 * function Dll.remove(dll: Dll<T>, value: T): void
 * ```
 *
 * Removes the first element in the list that matches the given value using strict equality (===).
 *
 * ## Example
 *
 * ```ts
 * import { Dll } from "@monstermann/fn";
 *
 * const dll = Dll.create<number>([1, 2, 3, 2, 4]);
 * Dll.remove(dll, 2);
 * // List is now: [1, 3, 2, 4] (only first match removed)
 * ```
 *
 */
export function remove<T>(dll: Dll<T>, value: NoInfer<T>): void {
    let pivot = dll.head
    while (pivot) {
        if (pivot.value === value) return unlink(dll, pivot)
        pivot = pivot.next
    }
}
