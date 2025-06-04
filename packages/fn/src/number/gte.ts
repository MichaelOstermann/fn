import { dual } from "@monstermann/dfdl"

/**
 * `gte(target, source)`
 *
 * Returns `true` if `target` is greater than or equal to `source`, otherwise `false`.
 *
 * ```ts
 * gte(5, 3); // true
 * gte(2, 7); // false
 * gte(4, 4); // true
 * ```
 *
 * ```ts
 * pipe(5, gte(3)); // true
 * pipe(2, gte(7)); // false
 * pipe(4, gte(4)); // true
 * ```
 */
export const gte: {
    (source: number): (target: number) => boolean
    (target: number, source: number): boolean
} = dual(2, (a: number, b: number): boolean => {
    return a >= b
})
