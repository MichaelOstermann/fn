import type { Mut, MutOptions, Updated } from "../internals/types"
import { indexWhere, removeAt } from "../internals/arrays"

/**
 * # removeFirstWhere
 *
 * ```ts
 * Array.removeFirstWhere(target, predicate, options?)
 * ```
 *
 * Removes the first element that satisfies `predicate`.
 * Returns `target` itself when there is no such element.
 *
 * With `{ mut: true }`, `target` itself is changed and returned.
 *
 * ## Example
 *
 * ```ts
 * Array.removeFirstWhere([1, 2, 3], x => x > 1); // [1, 3]
 *
 * Array.removeFirstWhere(tasks, task => task.id === id);
 * ```
 */
export function removeFirstWhere<T extends readonly unknown[]>(target: T, predicate: (value: T[number], index: number, target: T) => boolean, options?: MutOptions<T>): Updated<T>
export function removeFirstWhere(target: unknown[], predicate: (value: unknown, index: number, target: unknown[]) => boolean, options?: Mut): unknown[] {
    return removeAt(target, indexWhere(target, predicate, false), options)
}
