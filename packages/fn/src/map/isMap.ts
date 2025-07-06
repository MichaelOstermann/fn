import { dfdlT } from "@monstermann/dfdl"

/**
 * `isMap(target)`
 *
 * Checks if `target` is a Map instance.
 *
 * ```ts
 * isMap(new Map()); // true
 * isMap({}); // false
 * isMap([]); // false
 * ```
 *
 * ```ts
 * pipe(new Map(), isMap()); // true
 * pipe({}, isMap()); // false
 * pipe([], isMap()); // false
 * ```
 */
export const isMap: {
    (): (target: unknown) => target is Map<unknown, unknown>
    (target: unknown): target is Map<unknown, unknown>
} = dfdlT((target: unknown): target is Map<unknown, unknown> => {
    return target instanceof Map
}, 1)
