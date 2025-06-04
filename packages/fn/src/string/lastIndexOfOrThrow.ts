import { dual } from "@monstermann/dfdl"
import { FnError } from "../function/FnError"

/**
 * `lastIndexOfOrThrow(target, source)`
 *
 * Returns the index of the last occurrence of `source` string in `target` string, or throws an error if not found.
 *
 * ```ts
 * lastIndexOfOrThrow("hello world hello", "hello"); // 12
 * lastIndexOfOrThrow("hello world", "foo"); // throws FnError
 * ```
 *
 * ```ts
 * pipe("hello world hello", lastIndexOfOrThrow("hello")); // 12
 * pipe("hello world", lastIndexOfOrThrow("foo")); // throws FnError
 * ```
 */
export const lastIndexOfOrThrow: {
    (source: string): (target: string) => number
    (target: string, source: string): number
} = dual(2, (a: string, b: string): number => {
    const idx = a.lastIndexOf(b)
    if (Number.isFinite(idx)) return idx
    throw new FnError("String.lastIndexOfOrThrow: Value not found.", [a, b])
})
