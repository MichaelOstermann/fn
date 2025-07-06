import { dfdlT } from "@monstermann/dfdl"

/**
 * `size(target)`
 *
 * Returns the number of values in the `target` set.
 *
 * ```ts
 * size(new Set([1, 2, 3])); // 3
 * size(new Set()); // 0
 * ```
 *
 * ```ts
 * pipe(new Set([1, 2, 3]), size()); // 3
 * pipe(new Set(), size()); // 0
 * ```
 */
export const size: {
    (): <T extends ReadonlySet<unknown>>(target: T) => number
    <T extends ReadonlySet<unknown>>(target: T): number
} = dfdlT(<T extends ReadonlySet<unknown>>(target: T): number => {
    return target.size
}, 1)
