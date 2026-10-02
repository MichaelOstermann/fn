import type { Dll, DllLink } from "."

/**
 * # first
 *
 * ```ts
 * function Dll.first(dll: Dll<T>): DllLink<T> | undefined
 * ```
 *
 * Returns the first link node in the doubly-linked list.
 *
 * ## Example
 *
 * ```ts
 * import { Dll } from "@monstermann/fn";
 *
 * const dll = Dll.create<number>([1, 2, 3]);
 * const firstLink = Dll.first(dll);
 * console.log(firstLink?.value); // 1
 * ```
 *
 */
export function first<T>(dll: Dll<T>): DllLink<T> | undefined {
    return dll.head
}
