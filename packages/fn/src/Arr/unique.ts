import { dfdlT } from "../dfdlT"
import { markAsMutable } from "../markAsMutable"

/**
 * # unique
 *
 * ```ts
 * function Arr.unique<T>(target: readonly T[]): readonly T[]
 * ```
 *
 * Returns a new array with only the unique elements from `target`, preserving the order of first occurrence.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.unique([1, 2, 2, 3, 1]); // [1, 2, 3]
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 2, 3, 1], Arr.unique()); // [1, 2, 3]
 * ```
 *
 */
export const unique: {
    (): <T>(target: T[]) => T[]
    (): <T>(target: readonly T[]) => readonly T[]

    <T>(target: T[]): T[]
    <T>(target: readonly T[]): readonly T[]
} = dfdlT(<T>(target: T[]): T[] => {
    const set = new Set(target)
    return set.size === target.length
        ? target
        : markAsMutable(Array.from(set))
}, 1)
