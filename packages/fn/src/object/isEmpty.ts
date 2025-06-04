import type { UnknownRecord } from "./internals/types"
import { dual } from "@monstermann/dfdl"

/**
 * `isEmpty(target)`
 *
 * Checks if `target` object has no enumerable properties.
 *
 * ```ts
 * isEmpty({}); // true
 * isEmpty({ a: 1 }); // false
 * ```
 *
 * ```ts
 * pipe({}, isEmpty()); // true
 * pipe({ a: 1 }, isEmpty()); // false
 * ```
 */
export const isEmpty: {
    (): <T extends UnknownRecord>(target: T) => boolean
    <T extends UnknownRecord>(target: T): boolean
} = dual(1, <T extends UnknownRecord>(target: T): boolean => {
    // eslint-disable-next-line no-unreachable-loop
    for (const _ in target) return false
    return true
})
