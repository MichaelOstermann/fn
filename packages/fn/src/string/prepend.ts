import { dual } from "@monstermann/dfdl"

/**
 * `prepend(target, source)`
 *
 * Prepends `string` or strings from `source` iterable to the beginning of `target` string.
 *
 * ```ts
 * prepend("world", "hello "); // "hello world"
 * prepend("world", ["hello", " "]); // "hello world"
 * ```
 *
 * ```ts
 * pipe("world", prepend("hello ")); // "hello world"
 * pipe("world", prepend(["hello", " "])); // "hello world"
 * ```
 */
export const prepend: {
    (source: Iterable<string>): (target: string) => string
    (target: string, source: Iterable<string>): string
} = dual(2, (a: string, b: Iterable<string>): string => {
    return (typeof b === "string" ? b : Array.from(b).join("")) + a
})
