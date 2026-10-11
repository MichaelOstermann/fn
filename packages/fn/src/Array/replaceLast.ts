import type { Mut, MutOptions, Updated } from "../internals/types"
import { indexOf, setAt } from "../internals/arrays"

/**
 * # replaceLast
 *
 * ```ts
 * Array.replaceLast(target, value, replacement, options?)
 * ```
 *
 * Replaces the last occurrence of `value` with `replacement`.
 * Returns `target` itself when it does not occur, or when both are the same.
 *
 * With `{ mut: true }`, `target` itself is changed and returned.
 *
 * ## Example
 *
 * ```ts
 * Array.replaceLast([1, 2, 1], 1, 3); // [1, 2, 3]
 * ```
 */
export function replaceLast<T extends readonly unknown[]>(target: T, value: T[number], replacement: T[number], options?: MutOptions<T>): Updated<T>
export function replaceLast(target: unknown[], value: unknown, replacement: unknown, options?: Mut): unknown[] {
    return setAt(target, indexOf(target, value, true), replacement, options)
}
