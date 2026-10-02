import { dfdlT } from "../dfdlT"

/**
 * # isShallowEqual
 *
 * ```ts
 * function Arr.isShallowEqual<T, U extends T>(
 *     target: readonly T[],
 *     source: readonly U[],
 * ): target is readonly U[]
 * ```
 *
 * Returns `true` if `target` and `source` have the same length and their elements are equal using shallow comparison, otherwise returns `false`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.isShallowEqual([1, 2, 3], [1, 2, 3]); // true
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3], Arr.isShallowEqual([1, 2, 3])); // true
 * ```
 *
 */
export const isShallowEqual: {
    <T, U extends T>(source: readonly U[]): (target: T[]) => target is U[]
    <T, U extends T>(source: readonly U[]): (target: readonly T[]) => target is readonly U[]

    <T, U extends T>(target: T[], source: readonly U[]): target is U[]
    <T, U extends T>(target: readonly T[], source: readonly U[]): target is readonly U[]
} = dfdlT((<T, U extends T>(a: T[], b: U[]): a is U[] => {
    if (a === b || Object.is(a, b)) return true
    const len = a.length
    if (len !== b.length) return false
    for (let i = 0; i < len; i++) {
        if (a[i] !== b[i] || !Object.is(a[i], b[i])) return false
    }
    return true
}) as any, 2)
