import { dfdlT } from "../dfdlT"

/**
 * # minOrThrow
 *
 * ```ts
 * function Arr.minOrThrow(target: readonly number[]): number
 * ```
 *
 * Returns the minimum value from `target` array, or throws an error if the array is empty.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.minOrThrow([5, 2, 8, 1]); // 1
 * Arr.minOrThrow([]); // throws FnError
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([5, 2, 8, 1], Arr.minOrThrow()); // 1
 * pipe([], Arr.minOrThrow()); // throws FnError
 * ```
 *
 */
export const minOrThrow: {
    (): (target: readonly number[]) => number
    (target: readonly number[]): number
} = dfdlT((target: readonly number[]): number => {
    if (target.length === 0) throw new Error("Array.minOrThrow: Target is empty.")
    return target.reduce((a, b) => Math.min(a, b), 0)
}, 1)
