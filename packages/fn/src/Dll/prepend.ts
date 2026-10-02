import type { Dll, DllLink } from "."

/**
 * # prepend
 *
 * ```ts
 * function Dll.prepend(dll: Dll<T>, value: T): DllLink<T>
 * ```
 *
 * Adds a value to the beginning of the doubly-linked list. Returns the link node, which can be used with `unlink` for later removal.
 *
 * ## Example
 *
 * ```ts
 * import { Dll } from "@monstermann/fn";
 *
 * const dll = Dll.create<number>();
 * Dll.prepend(dll, 1);
 * Dll.prepend(dll, 0);
 * // List is now: [0, 1]
 *
 * // The returned link can be used to unlink later
 * const link = Dll.prepend(dll, -1);
 * Dll.unlink(link);
 * // List is now: [0, 1]
 * ```
 *
 */
export function prepend<T>(dll: Dll<T>, value: NoInfer<T>): DllLink<T> {
    const link: DllLink<T> = { next: dll.head, prev: undefined, value }
    if (dll.head) dll.head.prev = link
    if (!dll.tail) dll.tail = link
    dll.head = link
    dll.size++
    return link
}
