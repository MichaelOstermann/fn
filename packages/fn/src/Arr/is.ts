import { dfdlT } from "../dfdlT"

/**
 * # is
 *
 * ```ts
 * function Arr.is(target: unknown): target is readonly unknown[]
 * ```
 *
 * Returns `true` if `value` is an array, otherwise returns `false`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.is([1, 2, 3]); // true
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3], Arr.is()); // true
 * ```
 *
 */
export const is: {
    (): (target: unknown) => target is readonly unknown[]
    (target: unknown): target is readonly unknown[]
} = dfdlT((target: unknown): target is readonly unknown[] => {
    return Array.isArray(target)
}, 1)
