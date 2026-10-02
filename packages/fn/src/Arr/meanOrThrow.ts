import { dfdlT } from "../dfdl/dfdlT"

/**
 * # meanOrThrow
 *
 * ```ts
 * function Arr.meanOrThrow(target: readonly number[]): number
 * ```
 *
 * Returns the mean (average) value from `array`, or throws an error if the array is empty.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.meanOrThrow([1, 2, 3]); // 2
 * Arr.meanOrThrow([]); // throws FnError
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3], Arr.meanOrThrow()); // 2
 * pipe([], Arr.meanOrThrow()); // throws FnError
 * ```
 *
 */
export const meanOrThrow: {
    (): (target: readonly number[]) => number
    (target: readonly number[]): number
} = dfdlT((target: readonly number[]): number => {
    if (target.length === 0) throw new Error("Array.meanOrThrow: Target is empty.")
    return target.reduce((acc, val) => acc + val, 0) / target.length
}, 1)
