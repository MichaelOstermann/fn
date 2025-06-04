import { dual } from "@monstermann/dfdl"

/**
 * `parseInt(target)`
 *
 * Parses `target` string and returns an integer.
 *
 * ```ts
 * parseInt("42"); // 42
 * parseInt("42.5"); // 42
 * ```
 *
 * ```ts
 * pipe("42", parseInt()); // 42
 * pipe("42.5", parseInt()); // 42
 * ```
 */
export const parseInt: {
    (): (target: string) => number
    (target: string): number
} = dual(1, (target: string): number => {
    return Number.parseInt(target)
})
