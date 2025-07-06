import { dfdlT } from "@monstermann/dfdl"
import { FnError } from "../function/FnError"

/**
 * `indexOfOrThrow(target, value)`
 *
 * Returns the index of the first occurrence of `value` in `target`. If `value` is not found, throws an error.
 *
 * ```ts
 * indexOfOrThrow([1, 2, 3, 2], 2); // 1
 * indexOfOrThrow([1, 2, 3], 4); // throws FnError
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 2], indexOfOrThrow(2)); // 1
 * pipe([1, 2, 3], indexOfOrThrow(4)); // throws FnError
 * ```
 */
export const indexOfOrThrow: {
    <T>(value: NoInfer<T>): (target: readonly T[]) => number
    <T>(target: readonly T[], value: NoInfer<T>): number
} = dfdlT(<T>(target: readonly T[], value: NoInfer<T>): number => {
    const idx = target.indexOf(value)
    if (idx < 0) throw new FnError("Array.indexOf: No value found.", [target, value])
    return idx
}, 2)
