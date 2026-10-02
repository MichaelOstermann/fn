import { dfdlT } from "../dfdl/dfdlT"
import { cloneArray } from "../remmi/cloneArray"

/**
 * # shuffle
 *
 * ```ts
 * function Arr.shuffle<T>(target: readonly T[]): T[]
 * ```
 *
 * Returns a new array with the elements of `array` randomly shuffled.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.shuffle([1, 2, 3, 4]); // [3, 1, 4, 2] (random)
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3, 4], Arr.shuffle()); // [3, 1, 4, 2] (random)
 * ```
 *
 */
export const shuffle: {
    (): <T>(target: readonly T[]) => T[]
    <T>(target: readonly T[]): T[]
} = dfdlT(<T>(target: readonly T[]): T[] => {
    const result = cloneArray(target)
    for (let index = 0; index < target.length; index++) {
        const rand = index + Math.floor(Math.random() * (target.length - index))
        const value = result[rand]!
        result[rand] = result[index]!
        result[index] = value
    }
    return result
}, 1)
