import type { Dll } from "."

/**
 * # removeFirst
 *
 * ```ts
 * function Dll.removeFirst(dll: Dll<T>): T | undefined
 * ```
 *
 * Removes and returns the first element of the doubly-linked list.
 *
 * ## Example
 *
 * ```ts
 * import { Dll } from "@monstermann/fn";
 *
 * const dll = Dll.create<number>([1, 2, 3]);
 * const removed = Dll.removeFirst(dll);
 * console.log(removed); // 1
 * // List is now: [2, 3]
 * ```
 *
 */
export function removeFirst<T>(dll: Dll<T>): T | undefined {
    const head = dll.head
    if (!head) return undefined
    dll.head = head.next
    if (head.next) {
        head.next.prev = undefined
    }
    else {
        dll.tail = undefined
    }
    dll.size--
    return head.value
}
