import { dual } from "@monstermann/dfdl"

/**
 * `gt(target, source)`
 *
 * Returns `true` if `target` is greater than `source`, otherwise `false`.
 *
 * ```ts
 * gt(5, 3); // true
 * gt(2, 7); // false
 * gt(4, 4); // false
 * ```
 *
 * ```ts
 * pipe(5, gt(3)); // true
 * pipe(2, gt(7)); // false
 * pipe(4, gt(4)); // false
 * ```
 */
export const gt: {
    (source: number): (target: number) => boolean
    (target: number, source: number): boolean
} = dual(2, (a: number, b: number): boolean => {
    return a > b
})
