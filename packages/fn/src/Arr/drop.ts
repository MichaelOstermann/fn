import { dfdlT } from "../dfdl/dfdlT"
import { cloneArray } from "../remmi/cloneArray"
import { markAsMutable } from "../remmi/markAsMutable"

/**
 * # drop
 *
 * ```ts
 * function Arr.drop<T>(
 *     target: readonly T[],
 *     amount: number,
 * ): readonly T[]
 * ```
 *
 * Removes the first `amount` elements from `array`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.drop([1, 2, 3, 4, 5], 2); // [3, 4, 5]
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3, 4, 5], Arr.drop(2)); // [3, 4, 5]
 * ```
 *
 */
export const drop: {
    (amount: number): <T>(target: T[]) => T[]
    (amount: number): <T>(target: readonly T[]) => readonly T[]

    <T>(target: T[], amount: number): T[]
    <T>(target: readonly T[], amount: number): readonly T[]
} = dfdlT(<T>(target: T[], amount: number): T[] => {
    if (!Number.isInteger(amount) || target.length === 0 || amount < 0) return target
    if (target.length <= amount) return markAsMutable([])
    target = cloneArray(target)
    target.splice(0, amount)
    return target
}, 2)
