import type { Dll, DllLink } from "."

/**
 * # last
 *
 * ```ts
 * function Dll.last(dll: Dll<T>): DllLink<T> | undefined
 * ```
 *
 * Returns the last link node in the doubly-linked list.
 *
 * ## Example
 *
 * ```ts
 * import { Dll } from "@monstermann/fn";
 *
 * const dll = Dll.create<number>([1, 2, 3]);
 * const lastLink = Dll.last(dll);
 * console.log(lastLink?.value); // 3
 * ```
 *
 */
export function last<T>(dll: Dll<T>): DllLink<T> | undefined {
    return dll.tail
}
