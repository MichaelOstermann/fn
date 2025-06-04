import { dual } from "@monstermann/dfdl"
import { FnError } from "../function/FnError"

/**
 * `medianOrThrow(array)`
 *
 * Returns the median value from `array`, or throws an error if the array is empty.
 *
 * ```ts
 * medianOrThrow([1, 3, 5]); // 3
 * medianOrThrow([1, 2, 3, 4]); // 2.5
 * medianOrThrow([]); // throws FnError
 * ```
 *
 * ```ts
 * pipe([1, 3, 5], medianOrThrow()); // 3
 * pipe([1, 2, 3, 4], medianOrThrow()); // 2.5
 * pipe([], medianOrThrow()); // throws FnError
 * ```
 */
export const medianOrThrow: {
    (): (target: readonly number[]) => number
    (target: readonly number[]): number
} = dual(1, (target: readonly number[]): number => {
    if (target.length === 0) throw new FnError("Array.medianOrThrow: Target is empty.", [target])
    const sorted = target.toSorted((a, b) => a - b)
    const mid = Math.floor(sorted.length / 2)
    if (sorted.length % 2 === 0) return (sorted[mid - 1]! + sorted[mid]!) / 2
    else return sorted[mid]!
})
