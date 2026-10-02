import { dfdlT } from "../dfdl/dfdlT"

/**
 * # is
 *
 * ```ts
 * function Sets.is(target: unknown): target is Set<unknown>
 * ```
 *
 * Returns `true` if the value is a Set, `false` otherwise.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Sets } from "@monstermann/fn";
 *
 * Sets.is(Sets.create([1, 2, 3])); // true
 * Sets.is([1, 2, 3]); // false
 * Sets.is({}); // false
 * ```
 *
 * ```ts [data-last]
 * import { Sets } from "@monstermann/fn";
 *
 * pipe(Sets.create([1, 2, 3]), Sets.is()); // true
 * pipe([1, 2, 3], Sets.is()); // false
 * pipe({}, Sets.is()); // false
 * ```
 *
 */
export const is: {
    (): (target: unknown) => target is Set<unknown>
    (target: unknown): target is Set<unknown>
} = dfdlT((target: unknown): target is Set<unknown> => {
    return target instanceof Set
}, 1)
