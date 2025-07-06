import { dfdlT } from "@monstermann/dfdl"
import { cloneObject } from "@monstermann/remmi"

/**
 * `clone(target)`
 *
 * Creates a shallow copy of an object, unless marked as mutable with `markAsMutable` inside a mutation context (see [@monstermann/remmi](https://michaelostermann.github.io/remmi/#clonearray-array)).
 *
 * ```ts
 * const original = { a: 1, b: 2 };
 * const copy = clone(original); // { a: 1, b: 2 }
 * ```
 *
 * ```ts
 * const original = { a: 1, b: 2 };
 * const copy = pipe(original, clone()); // { a: 1, b: 2 }
 * ```
 */
export const clone: {
    (): <T extends object>(target: T) => T
    <T extends object>(target: T): T
} = dfdlT(cloneObject, 1)
