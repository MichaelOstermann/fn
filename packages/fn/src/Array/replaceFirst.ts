import type { Mut, MutOptions, Updated } from "../internals/types"
import { indexOf, setAt } from "../internals/arrays"

/**
 * # replaceFirst
 *
 * ```ts
 * Array.replaceFirst(target, value, replacement, options?)
 * ```
 *
 * Replaces the first occurrence of `value` with `replacement`.
 * Returns `target` itself when it does not occur, or when both are the same.
 *
 * With `{ mut: true }`, `target` itself is changed and returned.
 *
 * ## Example
 *
 * ```ts
 * Array.replaceFirst([1, 2, 1], 1, 3); // [3, 2, 1]
 * ```
 */
export function replaceFirst<T extends readonly unknown[]>(target: T, value: T[number], replacement: T[number], options?: MutOptions<T>): Updated<T>
export function replaceFirst(target: unknown[], value: unknown, replacement: unknown, options?: Mut): unknown[] {
    return setAt(target, indexOf(target, value, false), replacement, options)
}
