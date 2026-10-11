import type { Mut, MutOptions, Updated } from "../internals/types"
import { indexOf, removeAt } from "../internals/arrays"

/**
 * # removeLast
 *
 * ```ts
 * Array.removeLast(target, value, options?)
 * ```
 *
 * Removes the last occurrence of `value`.
 * Returns `target` itself when it does not occur.
 *
 * With `{ mut: true }`, `target` itself is changed and returned.
 *
 * ## Example
 *
 * ```ts
 * Array.removeLast([1, 2, 1], 1); // [1, 2]
 * ```
 */
export function removeLast<T extends readonly unknown[]>(target: T, value: T[number], options?: MutOptions<T>): Updated<T>
export function removeLast(target: unknown[], value: unknown, options?: Mut): unknown[] {
    return removeAt(target, indexOf(target, value, true), options)
}
