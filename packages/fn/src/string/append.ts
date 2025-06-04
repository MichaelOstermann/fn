import { dual } from "@monstermann/dfdl"

/**
 * `append(target, source)`
 *
 * Appends `source` or strings from `source` iterable to the end of `target` string.
 *
 * ```ts
 * append("hello", " world"); // "hello world"
 * append("hello", [" ", "world"]); // "hello world"
 * ```
 *
 * ```ts
 * pipe("hello", append(" world")); // "hello world"
 * pipe("hello", append([" ", "world"])); // "hello world"
 * ```
 */
export const append: {
    (source: Iterable<string>): (target: string) => string
    (target: string, source: Iterable<string>): string
} = dual(2, (a: string, b: Iterable<string>): string => {
    return a + (typeof b === "string" ? b : Array.from(b).join(""))
})
