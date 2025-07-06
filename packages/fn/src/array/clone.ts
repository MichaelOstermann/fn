import { dfdlT } from "@monstermann/dfdl"
import { cloneArray } from "@monstermann/remmi"

/**
 * `clone(array)`
 *
 * Creates a shallow copy of `array`.
 *
 * ```ts
 * clone([1, 2, 3, 4]); // [1, 2, 3, 4]
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 4], clone()); // [1, 2, 3, 4]
 * ```
 */
export const clone: {
    (): <T>(target: readonly T[]) => T[]
    <T>(target: readonly T[]): T[]
} = dfdlT(cloneArray, 1)
