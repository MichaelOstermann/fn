import type { Dll } from "."
import { append } from "./append"

/**
 * # create
 *
 * ```ts
 * function Dll.create(entries?: T[]): Dll<T>
 * ```
 *
 * Creates a new empty doubly-linked list, optionally initializing it with an array of values.
 *
 * ## Example
 *
 * ```ts
 * import { Dll } from "@monstermann/fn";
 *
 * // Create an empty list
 * const dll = Dll.create<number>();
 *
 * // Create a list with initial values
 * const dllWithValues = Dll.create<number>([1, 2, 3]);
 * ```
 *
 */
export function create<T>(entries?: T[]): Dll<T> {
    const dll: Dll<T> = {
        head: undefined,
        size: 0,
        tail: undefined,
    }

    if (entries) {
        for (const entry of entries) {
            append(dll, entry)
        }
    }

    return dll
}
