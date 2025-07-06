import type { TrimEnd } from "string-ts"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `trimEnd(target)`
 *
 * Removes whitespace from the end of `target` string.
 *
 * ```ts
 * trimEnd("  hello world  "); // "  hello world"
 * ```
 *
 * ```ts
 * pipe("  hello world  ", trimEnd()); // "  hello world"
 * ```
 */
export const trimEnd: {
    (): <T extends string>(target: T) => TrimEnd<T>
    <T extends string>(target: T): TrimEnd<T>
} = dfdlT(<T extends string>(target: T): TrimEnd<T> => {
    return target.trimEnd() as TrimEnd<T>
}, 1)
