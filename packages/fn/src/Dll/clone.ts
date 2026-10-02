import type { Dll } from "."
import { append } from "./append"
import { create } from "./create"

/**
 * # clone
 *
 * ```ts
 * function Dll.clone(dll: Dll<T>): Dll<T>
 * ```
 *
 * Creates a shallow copy of the doubly-linked list with the same values.
 *
 * ## Example
 *
 * ```ts
 * import { Dll } from "@monstermann/fn";
 *
 * const original = Dll.create<number>([1, 2, 3]);
 * const cloned = Dll.clone(original);
 *
 * Dll.append(cloned, 4);
 * console.log(Dll.toArray(original)); // [1, 2, 3]
 * console.log(Dll.toArray(cloned)); // [1, 2, 3, 4]
 * ```
 *
 */
export function clone<T>(dll: Dll<T>): Dll<T> {
    const copy = create<T>()
    let pivot = dll.head
    while (pivot) {
        append(copy, pivot.value)
        pivot = pivot.next
    }
    return copy
}
