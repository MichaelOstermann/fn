import { dual } from "@monstermann/dfdl"
import { FnError } from "../function/FnError"

/**
 * `indexOfOrThrow(target, source)`
 *
 * Returns the index of the first occurrence of `source` string in `target` string, or throws an error if not found.
 *
 * ```ts
 * indexOfOrThrow("hello world", "world"); // 6
 * indexOfOrThrow("hello world", "foo"); // throws FnError
 * ```
 *
 * ```ts
 * pipe("hello world", indexOfOrThrow("world")); // 6
 * pipe("hello world", indexOfOrThrow("foo")); // throws FnError
 * ```
 */
export const indexOfOrThrow: {
    (source: string): (target: string) => number
    (target: string, source: string): number
} = dual(2, (a: string, b: string): number => {
    const idx = a.indexOf(b)
    if (Number.isFinite(idx)) return idx
    throw new FnError("String.indexOfOrThrow: Value not found.", [a, b])
})
