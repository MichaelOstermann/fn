import type { Dll, DllLink } from "."

/**
 * # none
 *
 * ```ts
 * function Dll.none(
 *     dll: Dll<T>,
 *     predicate: (value: T, link: DllLink<T>, dll: Dll<T>) => boolean
 * ): boolean
 * ```
 *
 * Checks if no elements match the predicate; supports type guards.
 *
 * ## Example
 *
 * ```ts
 * import { Dll } from "@monstermann/fn";
 *
 * const dll = Dll.create<number>([1, 3, 5, 7]);
 * console.log(Dll.none(dll, (value) => value % 2 === 0)); // true
 *
 * const dll2 = Dll.create<number>([1, 3, 5, 8]);
 * console.log(Dll.none(dll2, (value) => value % 2 === 0)); // false
 * ```
 *
 */
export function none<T, U extends T>(dll: Dll<T>, predicate: (value: NoInfer<T>, link: DllLink<NoInfer<T>>, dll: Dll<NoInfer<T>>) => value is U): dll is Dll<Exclude<T, U>>
export function none<T>(dll: Dll<T>, predicate: (value: NoInfer<T>, link: DllLink<NoInfer<T>>, dll: Dll<NoInfer<T>>) => boolean): boolean
export function none<T>(dll: Dll<T>, predicate: (value: NoInfer<T>, link: DllLink<NoInfer<T>>, dll: Dll<NoInfer<T>>) => boolean): boolean {
    let pivot = dll.head
    while (pivot) {
        if (predicate(pivot.value, pivot, dll)) return false
        pivot = pivot.next
    }
    return true
}
