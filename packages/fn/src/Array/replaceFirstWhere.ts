import type { Mut, MutOptions, Updated } from "../internals/types"
import { indexWhere, setAt } from "../internals/arrays"

/**
 * # replaceFirstWhere
 *
 * ```ts
 * Array.replaceFirstWhere(target, predicate, replacement, options?)
 * ```
 *
 * Replaces the first element that satisfies `predicate` with `replacement`.
 * Returns `target` itself when there is no such element, or when it is `replacement` already.
 *
 * With `{ mut: true }`, `target` itself is changed and returned.
 *
 * ## Example
 *
 * ```ts
 * Array.replaceFirstWhere(tasks, task => task.id === id, updated);
 * ```
 */
export function replaceFirstWhere<T extends readonly unknown[]>(target: T, predicate: (value: T[number], index: number, target: T) => boolean, replacement: T[number], options?: MutOptions<T>): Updated<T>
export function replaceFirstWhere(target: unknown[], predicate: (value: unknown, index: number, target: unknown[]) => boolean, replacement: unknown, options?: Mut): unknown[] {
    return setAt(target, indexWhere(target, predicate, false), replacement, options)
}
