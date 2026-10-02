import type { Dll, DllLink } from "."

/**
 * # findLastIndex
 *
 * ```ts
 * function Dll.findLastIndex(
 *     dll: Dll<T>,
 *     predicate: (value: T, link: DllLink<T>, dll: Dll<T>) => boolean
 * ): number
 * ```
 *
 * Returns the index of the last element matching the predicate.
 *
 * ## Example
 *
 * ```ts
 * import { Dll } from "@monstermann/fn";
 *
 * const dll = Dll.create<number>([1, 2, 3, 4, 5]);
 * const index = Dll.findLastIndex(dll, (value) => value > 2);
 * console.log(index); // 4
 * ```
 *
 */
export function findLastIndex<T>(
    dll: Dll<T>,
    predicate: (value: NoInfer<T>, link: DllLink<NoInfer<T>>, dll: Dll<NoInfer<T>>) => boolean,
): number {
    let idx = dll.size - 1
    let pivot = dll.tail
    while (pivot) {
        if (predicate(pivot.value, pivot, dll)) {
            return idx
        }
        pivot = pivot.prev
        idx--
    }
    return -1
}
