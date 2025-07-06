import { dfdlT } from "@monstermann/dfdl"
import { cloneMap } from "@monstermann/remmi"

/**
 * `clone(target)`
 *
 * Creates a shallow copy of a `Map`, unless marked as mutable with `markAsMutable` inside a mutation context (see [@monstermann/remmi](https://michaelostermann.github.io/remmi/#clonearray-array)).
 *
 * ```ts
 * const original = new Map([
 *     ["a", 1],
 *     ["b", 2],
 * ]);
 *
 * const copy = clone(original); // Map { 'a' => 1, 'b' => 2 }
 * ```
 *
 * ```ts
 * const original = new Map([
 *     ["a", 1],
 *     ["b", 2],
 * ]);
 *
 * const copy = pipe(original, clone()); // Map { 'a' => 1, 'b' => 2 }
 * ```
 */
export const clone: {
    (): <K, V>(target: ReadonlyMap<K, V>) => Map<K, V>
    <K, V>(target: ReadonlyMap<K, V>): Map<K, V>
} = dfdlT(cloneMap, 1)
