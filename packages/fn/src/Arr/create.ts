/**
 * # create
 *
 * ```ts
 * function Arr.create(...args: any): any
 * ```
 *
 * An alias for `Arr.from(target, map?)`.
 *
 * ## Example
 *
 * ```ts
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.create({ length: 3 }, (_, i) => i); // [0, 1, 2]
 * ```
 *
 */
export function create<T>(target: ArrayLike<T>): T[]

export function create<T, U>(
    target: ArrayLike<T>,
    map: (v: T, k: number) => U,
): U[]

export function create<T>(target: Iterable<T> | ArrayLike<T>): T[]

export function create<T, U>(
    target: Iterable<T> | ArrayLike<T>,
    map: (v: T, k: number) => U,
): U[]

export function create(...args: any): any {
    // @ts-expect-error ignore
    return globalThis.Array.from(...args)
}
