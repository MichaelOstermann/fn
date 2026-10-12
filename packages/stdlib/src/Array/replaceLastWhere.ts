import type { Mut, MutOptions, Updated } from "../internals/types"
import { indexWhere, setAt } from "../internals/arrays"

/**
 * # replaceLastWhere
 *
 * ```ts
 * Array.replaceLastWhere(target, predicate, replacement, options?)
 * ```
 *
 * Replaces the last element that satisfies `predicate` with `replacement`.
 * Returns `target` itself when there is no such element, or when it is `replacement` already.
 *
 * With `{ mut: true }`, `target` itself is changed and returned.
 *
 * ## Example
 *
 * ```ts
 * Array.replaceLastWhere([1, 2, 3], x => x > 1, 0); // [1, 2, 0]
 *
 * Array.replaceLastWhere(tasks, task => task.id === id, updated);
 * ```
 */
export function replaceLastWhere<T extends readonly unknown[]>(target: T, predicate: (value: T[number], index: number, target: T) => boolean, replacement: T[number], options?: MutOptions<T>): Updated<T>
export function replaceLastWhere(target: unknown[], predicate: (value: unknown, index: number, target: unknown[]) => boolean, replacement: unknown, options?: Mut): unknown[] {
    return setAt(target, indexWhere(target, predicate, true), replacement, options)
}
