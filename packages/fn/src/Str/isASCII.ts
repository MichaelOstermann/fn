import { dfdlT } from "../dfdl/dfdlT"

/**
 * # isASCII
 *
 * ```ts
 * function Str.isASCII(target: string): boolean
 * ```
 *
 * Checks if `target` string contains only ASCII characters (U+0000 to U+007F).
 *
 * Returns `true` if all characters in the string are within the ASCII range, `false` otherwise.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.isASCII("hello world"); // true
 * Str.isASCII("café"); // false
 * Str.isASCII("123!@#"); // true
 * Str.isASCII("hello 🌍"); // false
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello world", Str.isASCII()); // true
 * pipe("café", Str.isASCII()); // false
 * pipe("123!@#", Str.isASCII()); // true
 * pipe("hello 🌍", Str.isASCII()); // false
 * ```
 *
 */
export const isASCII: {
    (): (target: string) => boolean
    (target: string): boolean
} = dfdlT((target: string): boolean => {
    // eslint-disable-next-line no-control-regex
    return !/[^\x00-\x7F]/.test(target)
}, 1)
