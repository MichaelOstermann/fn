import { cloneArray } from "../cloneArray"
import { dfdlT } from "../dfdlT"

/**
 * # clone
 *
 * ```ts
 * function Arr.clone<T>(target: readonly T[]): T[]
 * ```
 *
 * Creates a shallow copy of `array`, unless marked as mutable with `markAsMutable` inside a mutation context (see [@monstermann/remmi](https://michaelostermann.github.io/remmi/#clonearray-array)).
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.clone([1, 2, 3, 4]); // [1, 2, 3, 4]
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2, 3, 4], Arr.clone()); // [1, 2, 3, 4]
 * ```
 *
 */
export const clone: {
    (): <T>(target: readonly T[]) => T[]
    <T>(target: readonly T[]): T[]
} = dfdlT(cloneArray, 1)
