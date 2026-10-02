import type { Dll } from "."

/**
 * # toArray
 *
 * ```ts
 * function Dll.toArray(dll: Dll<T>): T[]
 * ```
 *
 * Converts the doubly-linked list to a standard JavaScript array.
 *
 * ## Example
 *
 * ```ts
 * import { Dll } from "@monstermann/fn";
 *
 * const dll = Dll.create<number>([1, 2, 3]);
 * const array = Dll.toArray(dll);
 * console.log(array); // [1, 2, 3]
 * ```
 *
 */
export function toArray<T>(dll: Dll<T>): T[] {
    const result: T[] = []
    let pivot = dll.head
    while (pivot) {
        result.push(pivot.value)
        pivot = pivot.next
    }
    return result
}
