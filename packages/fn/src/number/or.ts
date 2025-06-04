import { dual } from "@monstermann/dfdl"

/**
 * `or(target, or)`
 *
 * Returns the numeric value of `target` if it's a finite number, otherwise returns the fallback value `or`.
 *
 * ```ts
 * or(42, 0); // 42
 * or(NaN, 0); // 0
 * or(Infinity, 0); // 0
 * or("hello", 0); // 0
 * ```
 *
 * ```ts
 * pipe(42, or(0)); // 42
 * pipe(NaN, or(0)); // 0
 * pipe(Infinity, or(0)); // 0
 * pipe("hello", or(0)); // 0
 * ```
 */
export const or: {
    <U>(or: U): <T>(target: T) => Extract<T, number> | U
    <T, U>(target: T, or: U): Extract<T, number> | U
} = dual(2, <T, U>(target: T, or: U): Extract<T, number> | U => {
    return Number.isFinite(target)
        ? target as Extract<T, number>
        : or
})
