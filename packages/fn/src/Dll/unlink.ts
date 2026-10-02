import type { Dll, DllLink } from "."

/**
 * # unlink
 *
 * ```ts
 * function Dll.unlink(link: DllLink<T>): void
 * ```
 *
 * Removes a specific link node from its doubly-linked list and clears its references.
 *
 * ## Example
 *
 * ```ts
 * import { Dll } from "@monstermann/fn";
 *
 * const dll = Dll.create<number>([1, 2, 3]);
 * const secondLink = Dll.at(dll, 1)!;
 *
 * Dll.unlink(secondLink);
 * // List is now: [1, 3]
 * ```
 *
 */
export function unlink<T>(dll: Dll<T>, link: DllLink<T>): void {
    if (link.prev) link.prev.next = link.next
    if (link.next) link.next.prev = link.prev
    if (dll.tail === link) dll.tail = link.prev
    if (dll.head === link) dll.head = link.next
    dll.size--
}
