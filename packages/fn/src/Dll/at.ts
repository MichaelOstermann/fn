import type { Dll, DllLink } from "."

/**
 * # at
 *
 * ```ts
 * function Dll.at(dll: Dll<T>, offset: number): DllLink<T> | undefined
 * ```
 *
 * Retrieves the link node at a specific index, supporting negative indices and optimized traversal from the nearest end.
 *
 * ## Example
 *
 * ```ts
 * import { Dll } from "@monstermann/fn";
 *
 * const dll = Dll.create<number>([1, 2, 3, 4, 5]);
 *
 * const link = Dll.at(dll, 2);
 * console.log(link?.value); // 3
 *
 * // Negative indices count from the end
 * const lastLink = Dll.at(dll, -1);
 * console.log(lastLink?.value); // 5
 * ```
 *
 */
export function at<T>(dll: Dll<T>, offset: number): DllLink<T> | undefined {
    const index = offset < 0 ? dll.size + offset : offset
    if (index < 0 || index >= dll.size) return undefined

    // Traverse from head
    if (index < dll.size / 2) {
        let pivot = dll.head
        for (let i = 0; i < index; i++) {
            pivot = pivot?.next
        }
        return pivot
    }

    // Traverse from tail
    else {
        let pivot = dll.tail
        for (let i = dll.size - 1; i > index; i--) {
            pivot = pivot?.prev
        }
        return pivot
    }
}
