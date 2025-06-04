import { dual } from "@monstermann/dfdl"
import { FnError } from "../function/FnError"

/**
 * `meanOrThrow(array)`
 *
 * Returns the mean (average) value from `array`, or throws an error if the array is empty.
 *
 * ```ts
 * meanOrThrow([1, 2, 3]); // 2
 * meanOrThrow([]); // throws FnError
 * ```
 *
 * ```ts
 * pipe([1, 2, 3], meanOrThrow()); // 2
 * pipe([], meanOrThrow()); // throws FnError
 * ```
 */
export const meanOrThrow: {
    (): (target: readonly number[]) => number
    (target: readonly number[]): number
} = dual(1, (target: readonly number[]): number => {
    if (target.length === 0) throw new FnError("Array.meanOrThrow: Target is empty.", [target])
    return target.reduce((acc, val) => acc + val, 0) / target.length
})
