import type { Dll, DllLink } from "."

/**
 * # append
 *
 * ```ts
 * function Dll.append(dll: Dll<T>, value: T): DllLink<T>
 * ```
 *
 * Adds a value to the end of the doubly-linked list. Returns the link node, which can be used with `unlink` for later removal.
 *
 * ## Example
 *
 * ```ts
 * import { Dll } from "@monstermann/fn";
 *
 * const dll = Dll.create<number>();
 * Dll.append(dll, 0);
 * Dll.append(dll, 1);
 * // List is now: [0, 1]
 *
 * // The returned link can be used to unlink later
 * const link = Dll.append(dll, 2);
 * Dll.unlink(link);
 * // List is now: [0, 1]
 * ```
 *
 */
export function append<T>(dll: Dll<T>, value: NoInfer<T>): DllLink<T> {
    const link: DllLink<T> = { next: undefined, prev: dll.tail, value }
    if (dll.tail) dll.tail.next = link
    if (!dll.head) dll.head = link
    dll.tail = link
    dll.size++
    return link
}
