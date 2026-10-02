import { cloneArray } from "../cloneArray"
import { dfdlT } from "../dfdlT"
import { markAsMutable } from "../markAsMutable"

/**
 * # takeLast
 *
 * ```ts
 * function Arr.takeLast<T>(
 *     target: readonly T[],
 *     amount: number,
 * ): readonly T[]
 * ```
 *
 * Returns a new array containing the last `amount` elements from `array`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.takeLast([1, 2, 3, 4, 5], 3); // [3, 4, 5]
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3, 4, 5], Arr.takeLast(3)); // [3, 4, 5]
 * ```
 *
 */
export const takeLast: {
    <T>(amount: number): (target: T[]) => T[]
    <T>(amount: number): (target: readonly T[]) => readonly T[]

    <T>(target: T[], amount: number): T[]
    <T>(target: readonly T[], amount: number): readonly T[]
} = dfdlT(<T>(target: T[], amount: number): T[] => {
    if (!Number.isInteger(amount) || target.length <= amount) return target
    if (amount <= 0) return markAsMutable([])
    target = cloneArray(target)
    target.splice(0, target.length - amount)
    return target
}, 2)
