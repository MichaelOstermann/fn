import type { Dll, DllLink } from "."

/**
 * # reduce
 *
 * ```ts
 * function Dll.reduce(
 *     dll: Dll<T>,
 *     acc: U,
 *     reducer: (acc: U, value: T, link: DllLink<T>, dll: Dll<T>) => U
 * ): U
 * ```
 *
 * Reduces the list to a single value using an accumulator, traversing forward.
 *
 * ## Example
 *
 * ```ts
 * import { Dll } from "@monstermann/fn";
 *
 * const dll = Dll.create<number>([1, 2, 3, 4]);
 * const sum = Dll.reduce(dll, 0, (acc, value) => acc + value);
 * console.log(sum); // 10
 * ```
 *
 */
export function reduce<T, U>(
    dll: Dll<T>,
    acc: U,
    reducer: (acc: U, value: NoInfer<T>, link: DllLink<NoInfer<T>>, dll: Dll<NoInfer<T>>) => U,
): U {
    let pivot = dll.head
    while (pivot) {
        acc = reducer(acc, pivot.value, pivot, dll)
        pivot = pivot.next
    }
    return acc
}
