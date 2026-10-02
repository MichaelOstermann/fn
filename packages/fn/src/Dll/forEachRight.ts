import type { Dll, DllLink } from "."

/**
 * # forEachRight
 *
 * ```ts
 * function Dll.forEachRight(
 *     dll: Dll<T>,
 *     callback: (value: T, link: DllLink<T>, dll: Dll<T>) => void
 * ): void
 * ```
 *
 * Executes a callback for each element in the list, traversing backward.
 *
 * ## Example
 *
 * ```ts
 * import { Dll } from "@monstermann/fn";
 *
 * const dll = Dll.create<number>([1, 2, 3]);
 * Dll.forEachRight(dll, (value, link) => {
 *     console.log(value); // 3, 2, 1
 * });
 * ```
 *
 */
export function forEachRight<T>(
    dll: Dll<T>,
    callback: (value: NoInfer<T>, link: DllLink<NoInfer<T>>, dll: Dll<NoInfer<T>>) => void,
): void {
    let pivot = dll.tail
    while (pivot) {
        callback(pivot.value, pivot, dll)
        pivot = pivot.prev
    }
}
