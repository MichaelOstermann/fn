import type { Mut, MutOptions, Narrowed, Updated } from "../internals/types"
import { removeWhere } from "../internals/arrays"

/**
 * # filter
 *
 * ```ts
 * Array.filter(target, predicate, options?)
 * ```
 *
 * Keeps the elements that satisfy `predicate`.
 * Returns `target` itself when every element does.
 *
 * With `{ mut: true }`, `target` itself is changed and returned.
 *
 * ## Example
 *
 * ```ts
 * Array.filter([1, 2, 3], x => x > 1); // [2, 3]
 * Array.filter(tasks, () => true); // tasks
 * ```
 */
export function filter<T extends readonly unknown[], P extends (value: T[number], index: number, target: T) => boolean>(target: T, predicate: P, options?: MutOptions<T>): Updated<T, Narrowed<P, T[number]>>
export function filter(target: unknown[], predicate: (value: unknown, index: number, target: unknown[]) => boolean, options?: Mut): unknown[] {
    return removeWhere(target, (value, index) => !predicate(value, index, target), options)
}
