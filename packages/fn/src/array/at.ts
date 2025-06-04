import { dual } from "@monstermann/dfdl"

/**
 * `at(array, offset)`
 *
 * Returns the value at the specified `offset`.
 *
 * ```ts
 * at([1, 2, 3], -1); // 3
 * ```
 *
 * ```ts
 * pipe([1, 2, 3], at(-1)); // 3
 * ```
 */
export const at: {
    (offset: number): <T>(target: readonly T[]) => T | undefined
    <T>(target: readonly T[], offset: number): T | undefined
} = dual(2, <T>(target: readonly T[], offset: number): T | undefined => {
    return target.at(offset)
})
