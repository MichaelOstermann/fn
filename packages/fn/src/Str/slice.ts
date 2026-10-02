import type { Slice } from "string-ts"
import { slice as apply } from "string-ts"
import { dfdlT } from "../dfdl/dfdlT"

/**
 * # slice
 *
 * ```ts
 * function Str.slice<
 *     T extends string,
 *     U extends number,
 *     V extends number | undefined = undefined,
 * >(target: T, start: U, end?: V): Slice<T, U, V>
 * ```
 *
 * Extracts a section of `target` string from `start` index to `end` index (exclusive). If `end` is not provided, extracts to the end of the string.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.slice("hello world", 0, 5); // "hello"
 * Str.slice("hello world", 6, 11); // "world"
 * Str.slice("hello world", 6); // "world"
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello world", Str.slice(0, 5)); // "hello"
 * pipe("hello world", Str.slice(6, 11)); // "world"
 * pipe("hello world", Str.slice(6)); // "world"
 * ```
 *
 */
export const slice: {
    <T extends string, U extends number, V extends number | undefined = undefined>(start: U, end?: V): (target: T) => Slice<T, U, V>

    <T extends string, U extends number, V extends number | undefined = undefined>(target: T, start: U, end?: V): Slice<T, U, V>
} = dfdlT(apply, args => typeof args[0] === "string")
