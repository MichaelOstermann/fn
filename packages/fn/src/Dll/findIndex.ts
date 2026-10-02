import type { Dll, DllLink } from "."

/**
 * # findIndex
 *
 * ```ts
 * function Dll.findIndex(
 *     dll: Dll<T>,
 *     predicate: (value: T, link: DllLink<T>, dll: Dll<T>) => boolean
 * ): number
 * ```
 *
 * Returns the index of the first element matching the predicate.
 *
 * ## Example
 *
 * ```ts
 * import { Dll } from "@monstermann/fn";
 *
 * const dll = Dll.create<number>([1, 2, 3, 4, 5]);
 * const index = Dll.findIndex(dll, (value) => value > 3);
 * console.log(index); // 3
 * ```
 *
 */
export function findIndex<T>(
    dll: Dll<T>,
    predicate: (value: NoInfer<T>, link: DllLink<NoInfer<T>>, dll: Dll<NoInfer<T>>) => boolean,
): number {
    let idx = 0
    let pivot = dll.head
    while (pivot) {
        if (predicate(pivot.value, pivot, dll)) {
            return idx
        }
        pivot = pivot.next
        idx++
    }
    return -1
}
