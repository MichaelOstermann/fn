import { dfdlT } from "@monstermann/dfdl"

/**
 * `isDate(target)`
 *
 * Checks if a value is a Date instance.
 *
 * ```ts
 * isDate(new Date()); // true
 * isDate("2024-01-01"); // false
 * ```
 *
 * ```ts
 * pipe(new Date(), isDate()); // true
 * pipe("2024-01-01", isDate()); // false
 * ```
 */
export const isDate: {
    (): (target: unknown) => target is Date
    (target: unknown): target is Date
} = dfdlT((target: unknown): target is Date => {
    return target instanceof Date
}, 1)
