import { dual } from "@monstermann/dfdl"

/**
 * `randomOr(array, fallback)`
 *
 * Returns a random element from `array`, or `fallback` if the array is empty.
 *
 * ```ts
 * randomOr([1, 2, 3, 4], 0); // 2 (random)
 * ```
 *
 * ```ts
 * pipe([1, 2, 3, 4], randomOr(0)); // 2 (random)
 * ```
 */
export const randomOr: {
    <T, U>(or: U): (target: readonly T[]) => T | U
    <T, U>(target: readonly T[], or: U): T | U
} = dual(2, <T, U>(target: readonly T[], or: U): T | U => {
    if (target.length === 0) return or
    const idx = Math.floor(Math.random() * target.length)
    return target[idx]!
})
