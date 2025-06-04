import { dual } from "@monstermann/dfdl"

/**
 * `padEnd(target, length, fill)`
 *
 * Pads `target` string from the end with `fill` string until the result reaches the specified `length`.
 *
 * ```ts
 * padEnd("hello", 10, " "); // "hello     "
 * ```
 *
 * ```ts
 * pipe("hello", padEnd(10, " ")); // "hello     "
 * ```
 */
export const padEnd: {
    (length: number, fill: string): (target: string) => string
    (target: string, length: number, fill: string): string
} = dual(3, (target: string, length: number, fill: string): string => {
    return target.padEnd(length, fill)
})
