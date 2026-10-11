import type { Mut, MutOptions, Updated } from "../internals/types"
import { indexOf, removeAt } from "../internals/arrays"

/**
 * # removeFirst
 *
 * ```ts
 * Array.removeFirst(target, value, options?)
 * ```
 *
 * Removes the first occurrence of `value`.
 * Returns `target` itself when it does not occur.
 *
 * With `{ mut: true }`, `target` itself is changed and returned.
 *
 * ## Example
 *
 * ```ts
 * Array.removeFirst([1, 2, 1], 1); // [2, 1]
 * ```
 */
export function removeFirst<T extends readonly unknown[]>(target: T, value: T[number], options?: MutOptions<T>): Updated<T>
export function removeFirst(target: unknown[], value: unknown, options?: Mut): unknown[] {
    return removeAt(target, indexOf(target, value, false), options)
}
