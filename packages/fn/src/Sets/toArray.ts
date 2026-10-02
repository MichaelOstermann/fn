import { dfdlT } from "../dfdl/dfdlT"

/**
 * # toArray
 *
 * ```ts
 * function Sets.toArray<T>(target: ReadonlySet<T>): T[]
 * ```
 *
 * Converts the set to an array.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Sets } from "@monstermann/fn";
 *
 * Sets.toArray(Sets.create([1, 2, 3])); // [1, 2, 3]
 * Sets.toArray(Sets.create(["a", "b"])); // ['a', 'b']
 * ```
 *
 * ```ts [data-last]
 * import { Sets } from "@monstermann/fn";
 *
 * pipe(Sets.create([1, 2, 3]), Sets.toArray()); // [1, 2, 3]
 * pipe(Sets.create(["a", "b"]), Sets.toArray()); // ['a', 'b']
 * ```
 *
 */
export const toArray: {
    (): <T>(target: ReadonlySet<T>) => T[]
    <T>(target: ReadonlySet<T>): T[]
} = dfdlT(<T>(target: ReadonlySet<T>): T[] => {
    return Array.from(target)
}, 1)
