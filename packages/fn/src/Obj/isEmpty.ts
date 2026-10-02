import { dfdlT } from "../dfdlT"

/**
 * # isEmpty
 *
 * ```ts
 * function Obj.isEmpty<T extends object>(target: T): boolean
 * ```
 *
 * Checks if `target` object has no enumerable properties.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Obj } from "@monstermann/fn";
 *
 * Obj.isEmpty({}); // true
 * Obj.isEmpty({ a: 1 }); // false
 * ```
 *
 * ```ts [data-last]
 * import { Obj } from "@monstermann/fn";
 *
 * pipe({}, Obj.isEmpty()); // true
 * pipe({ a: 1 }, Obj.isEmpty()); // false
 * ```
 *
 */
export const isEmpty: {
    (): <T extends object>(target: T) => boolean
    <T extends object>(target: T): boolean
} = dfdlT(<T extends object>(target: T): boolean => {
    // eslint-disable-next-line no-unreachable-loop
    for (const _ in target) return false
    return true
}, 1)
