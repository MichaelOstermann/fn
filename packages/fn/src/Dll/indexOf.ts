import type { Dll } from "."

/**
 * # indexOf
 *
 * ```ts
 * function Dll.indexOf(dll: Dll<T>, value: T): number
 * ```
 *
 * Returns the index of the first occurrence of a value using strict equality (===).
 *
 * ## Example
 *
 * ```ts
 * import { Dll } from "@monstermann/fn";
 *
 * const dll = Dll.create<number>([1, 2, 3, 2, 4]);
 * console.log(Dll.indexOf(dll, 2)); // 1
 * console.log(Dll.indexOf(dll, 10)); // -1
 * ```
 *
 */
export function indexOf<T>(dll: Dll<T>, value: NoInfer<T>): number {
    let idx = 0
    let pivot = dll.head
    while (pivot) {
        if (pivot.value === value) return idx
        pivot = pivot.next
        idx++
    }
    return -1
}
