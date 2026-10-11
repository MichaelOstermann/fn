import type { Mut, MutOptions, Updated } from "../internals/types"
import { indexWhere, removeAt } from "../internals/arrays"

/**
 * # removeLastWhere
 *
 * ```ts
 * Array.removeLastWhere(target, predicate, options?)
 * ```
 *
 * Removes the last element that satisfies `predicate`.
 * Returns `target` itself when there is no such element.
 *
 * With `{ mut: true }`, `target` itself is changed and returned.
 *
 * ## Example
 *
 * ```ts
 * Array.removeLastWhere(tasks, task => task.id === id);
 * ```
 */
export function removeLastWhere<T extends readonly unknown[]>(target: T, predicate: (value: T[number], index: number, target: T) => boolean, options?: MutOptions<T>): Updated<T>
export function removeLastWhere(target: unknown[], predicate: (value: unknown, index: number, target: unknown[]) => boolean, options?: Mut): unknown[] {
    return removeAt(target, indexWhere(target, predicate, true), options)
}
