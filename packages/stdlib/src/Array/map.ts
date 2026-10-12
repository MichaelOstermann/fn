import type { Mut, MutOptions, Updated } from "../internals/types"
import { mapWhere } from "../internals/arrays"

/**
 * # map
 *
 * ```ts
 * Array.map(target, map, options?)
 * ```
 *
 * Applies `map` to every element.
 * Returns `target` itself when no element changed.
 *
 * With `{ mut: true }`, `target` itself is changed and returned, which `map` has to return the same kind of element for.
 *
 * ## Example
 *
 * ```ts
 * Array.map([1, 2], x => x * 2); // [2, 4]
 * Array.map(tasks, task => task); // tasks
 * ```
 */
export function map<T extends readonly unknown[], U, const O extends MutOptions<T> = MutOptions<T>>(target: T, map: (value: T[number], index: number, target: T) => O extends { mut: true } ? T[number] : U, options?: O): Updated<T, O extends { mut: true } ? T[number] : U>
export function map(target: unknown[], map: (value: unknown, index: number, target: unknown[]) => unknown, options?: Mut): unknown[] {
    return mapWhere(target, undefined, map, options)
}
