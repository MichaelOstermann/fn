import type { Mut, MutOptions, Updated } from "../internals/types"

/**
 * # unique
 *
 * ```ts
 * Array.unique(target, options?)
 * ```
 *
 * Removes what occurs more than once, the first occurrence stays.
 * Returns `target` itself when there are no duplicates.
 *
 * With `{ mut: true }`, `target` itself is changed and returned.
 *
 * ## Example
 *
 * ```ts
 * Array.unique([1, 2, 1, 3, 2]); // [1, 2, 3]
 * ```
 */
export function unique<T extends readonly unknown[]>(target: T, options?: MutOptions<T>): Updated<T>
export function unique(target: unknown[], options?: Mut): unknown[] {
    const values = new Set(target)
    if (values.size === target.length) return target
    if (!options?.mut) return [...values]
    let length = 0
    for (const value of values) target[length++] = value
    target.length = length
    return target
}
