import type { Dll, DllLink } from "."

/**
 * # some
 *
 * ```ts
 * function Dll.some(
 *     dll: Dll<T>,
 *     predicate: (value: T, link: DllLink<T>, dll: Dll<T>) => boolean
 * ): boolean
 * ```
 *
 * Checks if at least one element matches the predicate.
 *
 * ## Example
 *
 * ```ts
 * import { Dll } from "@monstermann/fn";
 *
 * const dll = Dll.create<number>([1, 3, 5, 8]);
 * console.log(Dll.some(dll, (value) => value % 2 === 0)); // true
 *
 * const dll2 = Dll.create<number>([1, 3, 5, 7]);
 * console.log(Dll.some(dll2, (value) => value % 2 === 0)); // false
 * ```
 *
 */
export function some<T>(dll: Dll<T>, predicate: (value: NoInfer<T>, link: DllLink<NoInfer<T>>, dll: Dll<NoInfer<T>>) => boolean): boolean {
    let pivot = dll.head
    while (pivot) {
        if (predicate(pivot.value, pivot, dll)) return true
        pivot = pivot.next
    }
    return false
}
