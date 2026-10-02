import type { Dll, DllLink } from "."

/**
 * # reduceRight
 *
 * ```ts
 * function Dll.reduceRight(
 *     dll: Dll<T>,
 *     acc: U,
 *     reducer: (acc: U, value: T, link: DllLink<T>, dll: Dll<T>) => U
 * ): U
 * ```
 *
 * Reduces the list to a single value using an accumulator, traversing backward.
 *
 * ## Example
 *
 * ```ts
 * import { Dll } from "@monstermann/fn";
 *
 * const dll = Dll.create<number>([1, 2, 3, 4]);
 * const concatenated = Dll.reduceRight(dll, "", (acc, value) => acc + value);
 * console.log(concatenated); // "4321"
 * ```
 *
 */
export function reduceRight<T, U>(
    dll: Dll<T>,
    acc: U,
    reducer: (acc: U, value: NoInfer<T>, link: DllLink<NoInfer<T>>, dll: Dll<NoInfer<T>>) => U,
): U {
    let pivot = dll.tail
    while (pivot) {
        acc = reducer(acc, pivot.value, pivot, dll)
        pivot = pivot.prev
    }
    return acc
}
