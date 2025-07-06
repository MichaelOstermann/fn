import { dfdlT } from "@monstermann/dfdl"

/**
 * `lt(target, source)`
 *
 * Returns `true` if `target` is less than `source`, otherwise `false`.
 *
 * ```ts
 * lt(3, 5); // true
 * lt(7, 2); // false
 * lt(4, 4); // false
 * ```
 *
 * ```ts
 * pipe(3, lt(5)); // true
 * pipe(7, lt(2)); // false
 * pipe(4, lt(4)); // false
 * ```
 */
export const lt: {
    (source: number): (target: number) => boolean
    (target: number, source: number): boolean
} = dfdlT((a: number, b: number): boolean => {
    return a < b
}, 2)
