import { dual } from "@monstermann/dfdl"

/**
 * `has(array, value)`
 *
 * Returns `true` if `array` contains `value`, otherwise returns `false`.
 *
 * ```ts
 * has([1, 2, 3, 4], 3); // true
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 4], has(3)); // true
 * ```
 */
export const has: {
    <T>(value: NoInfer<T>): (target: readonly T[]) => boolean
    <T>(target: readonly T[], value: NoInfer<T>): boolean
} = dual(2, <T>(target: readonly T[], value: NoInfer<T>): boolean => {
    return target.includes(value)
})
