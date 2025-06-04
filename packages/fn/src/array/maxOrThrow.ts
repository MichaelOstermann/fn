import { dual } from "@monstermann/dfdl"
import { FnError } from "../function/FnError"

/**
 * `maxOrThrow(array)`
 *
 * Returns the maximum value from `array`, or throws an error if the array is empty.
 *
 * ```ts
 * maxOrThrow([1, 5, 3]); // 5
 * maxOrThrow([]); // throws FnError
 * ```
 *
 * ```ts
 * pipe([1, 5, 3], maxOrThrow()); // 5
 * pipe([], maxOrThrow()); // throws FnError
 * ```
 */
export const maxOrThrow: {
    (): (target: readonly number[]) => number
    (target: readonly number[]): number
} = dual(1, (target: readonly number[]): number => {
    if (target.length === 0) throw new FnError("Array.maxOrThrow: Target is empty.", [target])
    return target.reduce((a, b) => Math.max(a, b), 0)
})
