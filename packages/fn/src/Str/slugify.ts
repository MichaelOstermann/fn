import { dfdlT } from "../dfdl/dfdlT"
import { deburr } from "./deburr"

const NON_ALPHANUMERIC = /[^a-z0-9\s-]/g
const SEPARATORS = /[\s_/]+/g
const CLEANUP_HYPHENS = /^-+|-+$|(-)+/g

/**
 * # slugify
 *
 * ```ts
 * function Str.slugify(target: string): string
 * ```
 *
 * Converts `target` string to a URL-friendly slug format.
 *
 * The function removes diacritical marks, converts to lowercase, replaces whitespace and separators with hyphens, removes non-alphanumeric characters, and cleans up multiple or leading/trailing hyphens.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.slugify("Hello World"); // "hello-world"
 * Str.slugify("Café au Lait"); // "cafe-au-lait"
 * Str.slugify("  Multiple   Spaces  "); // "multiple-spaces"
 * Str.slugify("Special!@#Characters"); // "specialcharacters"
 * Str.slugify("foo_bar/baz"); // "foo-bar-baz"
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("Hello World", Str.slugify()); // "hello-world"
 * pipe("Café au Lait", Str.slugify()); // "cafe-au-lait"
 * pipe("  Multiple   Spaces  ", Str.slugify()); // "multiple-spaces"
 * pipe("Special!@#Characters", Str.slugify()); // "specialcharacters"
 * pipe("foo_bar/baz", Str.slugify()); // "foo-bar-baz"
 * ```
 *
 */
export const slugify: {
    (): (target: string) => string
    (target: string): string
} = dfdlT((target: string): string => {
    return deburr(target)
        .toLowerCase()
        .replace(SEPARATORS, "-")
        .replace(NON_ALPHANUMERIC, "")
        .replace(CLEANUP_HYPHENS, "$1")
}, 1)
