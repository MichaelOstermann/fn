import { dual } from "@monstermann/dfdl"

/**
 * `add(target, source)`
 *
 * Adds `source` to `target` and returns the result.
 *
 * ```ts
 * add(5, 3); // 8
 * ```
 *
 * ```ts
 * pipe(5, add(3)); // 8
 * ```
 */
export const add: {
    (source: number): (target: number) => number
    (target: number, source: number): number
} = dual(2, (a: number, b: number): number => {
    return a + b
})
