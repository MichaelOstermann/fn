import { dual } from "@monstermann/dfdl"
import { FnError } from "../function/FnError"

/**
 * `lastIndexOfOrThrow(target, value)`
 *
 * Returns the index of the last occurrence of `value` in `target`. If `value` is not found, throws an error.
 *
 * ```ts
 * lastIndexOfOrThrow([1, 2, 3, 2], 2); // 3
 * lastIndexOfOrThrow([1, 2, 3], 4); // throws FnError
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 2], lastIndexOfOrThrow(2)); // 3
 * pipe([1, 2, 3], lastIndexOfOrThrow(4)); // throws FnError
 * ```
 */
export const lastIndexOfOrThrow: {
    <T>(value: NoInfer<T>): (target: readonly T[]) => number
    <T>(target: readonly T[], value: NoInfer<T>): number
} = dual(2, <T>(target: readonly T[], value: NoInfer<T>): number => {
    const idx = target.lastIndexOf(value)
    if (idx < 0) throw new FnError("Array.lastIndexOf: No value found.", [target, value])
    return idx
})
