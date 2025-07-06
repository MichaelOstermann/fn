import { dfdlT } from "@monstermann/dfdl"
import { cloneSet } from "@monstermann/remmi"

/**
 * `clone(target)`
 *
 * Creates a shallow copy of a `Set`, unless marked as mutable with `markAsMutable` inside a mutation context (see [@monstermann/remmi](https://michaelostermann.github.io/remmi/#clonearray-array)).
 *
 * ```ts
 * const original = new Set([1, 2, 3]);
 * const copy = clone(original); // Set { 1, 2, 3 }
 * ```
 *
 * ```ts
 * const original = new Set([1, 2, 3]);
 * const copy = pipe(original, clone()); // Set { 1, 2, 3 }
 * ```
 */
export const clone: {
    (): <T>(target: ReadonlySet<T>) => Set<T>
    <T>(target: ReadonlySet<T>): Set<T>
} = dfdlT(cloneSet, 1)
