import { dual } from "@monstermann/dfdl"
import { FnError } from "../function/FnError"

/**
 * `minOrThrow(target)`
 *
 * Returns the minimum value from `target` array, or throws an error if the array is empty.
 *
 * ```ts
 * minOrThrow([5, 2, 8, 1]); // 1
 * minOrThrow([]); // throws FnError
 * ```
 *
 * ```ts
 * pipe([5, 2, 8, 1], minOrThrow()); // 1
 * pipe([], minOrThrow()); // throws FnError
 * ```
 */
export const minOrThrow: {
    (): (target: readonly number[]) => number
    (target: readonly number[]): number
} = dual(1, (target: readonly number[]): number => {
    if (target.length === 0) throw new FnError("Array.minOrThrow: Target is empty.", [target])
    return target.reduce((a, b) => Math.min(a, b), 0)
})
