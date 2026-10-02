import type { Dll, DllLink } from "."

/**
 * # entries
 *
 * ```ts
 * function Dll.entries(dll: Dll<T>): IterableIterator<DllLink<T>>
 * ```
 *
 * Returns an iterable iterator over the link nodes in the list.
 *
 * ## Example
 *
 * ```ts
 * import { Dll } from "@monstermann/fn";
 *
 * const dll = Dll.create<number>([1, 2, 3]);
 *
 * for (const link of Dll.entries(dll)) {
 *     console.log(link.value); // 1, 2, 3
 * }
 * ```
 *
 */
export function entries<T>(dll: Dll<T>): IterableIterator<DllLink<T>> {
    let pivot = dll.head
    return {
        next() {
            if (pivot) {
                const result = { done: false as const, value: pivot }
                pivot = pivot.next
                return result
            }
            return { done: true as const, value: undefined }
        },
        [Symbol.iterator]() {
            return this
        },
    }
}
