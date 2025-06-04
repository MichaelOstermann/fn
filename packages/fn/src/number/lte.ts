import { dual } from "@monstermann/dfdl"

/**
 * `lte(target, source)`
 *
 * Returns `true` if `target` is less than or equal to `source`, otherwise `false`.
 *
 * ```ts
 * lte(3, 5); // true
 * lte(7, 2); // false
 * lte(4, 4); // true
 * ```
 *
 * ```ts
 * pipe(3, lte(5)); // true
 * pipe(7, lte(2)); // false
 * pipe(4, lte(4)); // true
 * ```
 */
export const lte: {
    (source: number): (target: number) => boolean
    (target: number, source: number): boolean
} = dual(2, (a: number, b: number): boolean => {
    return a <= b
})
