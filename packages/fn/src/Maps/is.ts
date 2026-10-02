import { dfdlT } from "../dfdlT"

/**
 * # is
 *
 * ```ts
 * function Maps.is(
 *     target: unknown,
 * ): target is Map<unknown, unknown>
 * ```
 *
 * Type guard that checks whether a value is a Map instance.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Maps } from "@monstermann/fn";
 *
 * Maps.is(new Map()); // true
 * Maps.is({}); // false
 * Maps.is([]); // false
 * ```
 *
 * ```ts [data-last]
 * import { Maps } from "@monstermann/fn";
 *
 * pipe(new Map(), Maps.is()); // true
 * pipe({}, Maps.is()); // false
 * pipe([], Maps.is()); // false
 * ```
 *
 */
export const is: {
    (): (target: unknown) => target is Map<unknown, unknown>
    (target: unknown): target is Map<unknown, unknown>
} = dfdlT((target: unknown): target is Map<unknown, unknown> => {
    return target instanceof Map
}, 1)
