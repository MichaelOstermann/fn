import { cloneSet } from "../cloneSet"
import { dfdlT } from "../dfdlT"

/**
 * # clone
 *
 * ```ts
 * function Sets.clone<T>(target: ReadonlySet<T>): Set<T>
 * ```
 *
 * Returns a shallow copy of the set, unless marked as mutable with `markAsMutable` inside a mutation context (see [@monstermann/remmi](https://michaelostermann.github.io/remmi/#clonearray-array)).
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Sets } from "@monstermann/fn";
 *
 * const original = Sets.create([1, 2, 3]);
 * const copy = Sets.clone(original); // Set { 1, 2, 3 }
 * ```
 *
 * ```ts [data-last]
 * import { Sets } from "@monstermann/fn";
 *
 * const original = Sets.create([1, 2, 3]);
 * const copy = pipe(original, Sets.clone()); // Set { 1, 2, 3 }
 * ```
 *
 */
export const clone: {
    (): <T>(target: ReadonlySet<T>) => Set<T>
    <T>(target: ReadonlySet<T>): Set<T>
} = dfdlT(cloneSet, 1)
