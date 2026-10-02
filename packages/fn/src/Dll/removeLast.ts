import type { Dll } from "."

/**
 * # removeLast
 *
 * ```ts
 * function Dll.removeLast(dll: Dll<T>): T | undefined
 * ```
 *
 * Removes and returns the last element of the doubly-linked list.
 *
 * ## Example
 *
 * ```ts
 * import { Dll } from "@monstermann/fn";
 *
 * const dll = Dll.create<number>([1, 2, 3]);
 * const removed = Dll.removeLast(dll);
 * console.log(removed); // 3
 * // List is now: [1, 2]
 * ```
 *
 */
export function removeLast<T>(dll: Dll<T>): T | undefined {
    const tail = dll.tail
    if (!tail) return undefined
    dll.tail = tail.prev
    if (tail.prev) {
        tail.prev.next = undefined
    }
    else {
        dll.head = undefined
    }
    dll.size--
    return tail.value
}
