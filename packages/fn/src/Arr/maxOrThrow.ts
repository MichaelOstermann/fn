import { dfdlT } from "../dfdl/dfdlT"

/**
 * # maxOrThrow
 *
 * ```ts
 * function Arr.maxOrThrow(target: readonly number[]): number
 * ```
 *
 * Returns the maximum value from `array`, or throws an error if the array is empty.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.maxOrThrow([1, 5, 3]); // 5
 * Arr.maxOrThrow([]); // throws FnError
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 5, 3], Arr.maxOrThrow()); // 5
 * pipe([], Arr.maxOrThrow()); // throws FnError
 * ```
 *
 */
export const maxOrThrow: {
    (): (target: readonly number[]) => number
    (target: readonly number[]): number
} = dfdlT((target: readonly number[]): number => {
    if (target.length === 0) throw new Error("Array.maxOrThrow: Target is empty.")
    return target.reduce((a, b) => Math.max(a, b), 0)
}, 1)
