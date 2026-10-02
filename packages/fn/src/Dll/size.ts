import type { Dll } from "."

/**
 * # size
 *
 * ```ts
 * function Dll.size(dll: Dll<T>): number
 * ```
 *
 * Returns the number of elements in the doubly-linked list.
 *
 * ## Example
 *
 * ```ts
 * import { Dll } from "@monstermann/fn";
 *
 * const dll = Dll.create<number>([1, 2, 3]);
 * console.log(Dll.size(dll)); // 3
 *
 * Dll.append(dll, 4);
 * console.log(Dll.size(dll)); // 4
 * ```
 *
 */
export function size<T>(dll: Dll<T>): number {
    return dll.size
}
