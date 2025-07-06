import type { Slice } from "string-ts"
import { dfdlT } from "@monstermann/dfdl"
import { slice as apply } from "string-ts"

/**
 * `slice(target, start, end?)`
 *
 * Extracts a section of `target` string from `start` index to `end` index (exclusive). If `end` is not provided, extracts to the end of the string.
 *
 * ```ts
 * slice("hello world", 0, 5); // "hello"
 * slice("hello world", 6, 11); // "world"
 * slice("hello world", 6); // "world"
 * ```
 *
 * ```ts
 * pipe("hello world", slice(0, 5)); // "hello"
 * pipe("hello world", slice(6, 11)); // "world"
 * pipe("hello world", slice(6)); // "world"
 * ```
 */
export const slice: {
    <T extends string, U extends number, V extends number | undefined = undefined>(start: U, end?: V): (target: T) => Slice<T, U, V>

    <T extends string, U extends number, V extends number | undefined = undefined>(target: T, start: U, end?: V): Slice<T, U, V>
} = dfdlT(apply, args => typeof args[0] === "string")
