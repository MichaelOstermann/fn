import { dfdlT } from "../dfdl/dfdlT"
import { cloneMap } from "../remmi/cloneMap"

/**
 * # clone
 *
 * ```ts
 * function Maps.clone<K, V>(target: ReadonlyMap<K, V>): Map<K, V>
 * ```
 *
 * Creates a shallow copy of the map, unless marked as mutable with `markAsMutable` inside a mutation context (see [@monstermann/remmi](https://michaelostermann.github.io/remmi/#clonearray-array)).
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * const original = new Map([
 *     ["a", 1],
 *     ["b", 2],
 * ]);
 *
 * const copy = Maps.clone(original); // Map { 'a' => 1, 'b' => 2 }
 * ```
 *
 * ```ts [data-last]
 * import { Maps } from "@monstermann/fn";
 *
 * const original = new Map([
 *     ["a", 1],
 *     ["b", 2],
 * ]);
 *
 * const copy = pipe(original, Maps.clone()); // Map { 'a' => 1, 'b' => 2 }
 * ```
 *
 */
export const clone: {
    (): <K, V>(target: ReadonlyMap<K, V>) => Map<K, V>
    <K, V>(target: ReadonlyMap<K, V>): Map<K, V>
} = dfdlT(cloneMap, 1)
