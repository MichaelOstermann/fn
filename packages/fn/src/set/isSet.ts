import { dfdlT } from "@monstermann/dfdl"

/**
 * `isSet(target)`
 *
 * Checks if the `target` value is a Set instance. Returns `true` if the value is a Set, `false` otherwise.
 *
 * ```ts
 * isSet(new Set([1, 2, 3])); // true
 * isSet([1, 2, 3]); // false
 * isSet({}); // false
 * ```
 *
 * ```ts
 * pipe(new Set([1, 2, 3]), isSet()); // true
 * pipe([1, 2, 3], isSet()); // false
 * pipe({}, isSet()); // false
 * ```
 */
export const isSet: {
    (): (target: unknown) => target is Set<unknown>
    (target: unknown): target is Set<unknown>
} = dfdlT((target: unknown): target is Set<unknown> => {
    return target instanceof Set
}, 1)
