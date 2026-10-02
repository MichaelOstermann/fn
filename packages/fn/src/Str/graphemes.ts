import { dfdlT } from "../dfdlT"
import { isASCII } from "./isASCII"

let segmenter: Intl.Segmenter

/**
 * # graphemes
 *
 * ```ts
 * function Str.graphemes(target: string): Generator<string>
 * ```
 *
 * Returns a generator that yields individual grapheme clusters from `target` string.
 *
 * A grapheme cluster represents a single user-perceived character, which may consist of multiple Unicode code points (e.g., emojis with modifiers, base characters with combining diacriticals).
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * [...String.graphemes("hello")]; // ["h", "e", "l", "l", "o"]
 * [...String.graphemes("👨‍👩‍👧‍👦")]; // ["👨‍👩‍👧‍👦"]
 * [...String.graphemes("café")]; // ["c", "a", "f", "é"]
 * [...String.graphemes("👋🏽")]; // ["👋🏽"]
 *
 * // Using in a loop
 * for (const grapheme of Str.graphemes("hello👋")) {
 *     console.log(grapheme); // "h", "e", "l", "l", "o", "👋"
 * }
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * [...pipe("hello", Str.graphemes())]; // ["h", "e", "l", "l", "o"]
 * [...pipe("👨‍👩‍👧‍👦", Str.graphemes())]; // ["👨‍👩‍👧‍👦"]
 * [...pipe("café", Str.graphemes())]; // ["c", "a", "f", "é"]
 * [...pipe("👋🏽", Str.graphemes())]; // ["👋🏽"]
 *
 * // Using in a loop
 * for (const grapheme of pipe("hello👋", Str.graphemes())) {
 *     console.log(grapheme); // "h", "e", "l", "l", "o", "👋"
 * }
 * ```
 *
 */
export const graphemes: {
    (): (target: string) => Generator<string>
    (target: string): Generator<string>
} = dfdlT(function* (target: string): Generator<string> {
    if (isASCII(target)) {
        yield* target
        return
    }

    segmenter ??= new Intl.Segmenter(undefined, {
        granularity: "grapheme",
    })

    const segments = segmenter.segment(target)

    for (const segment of segments) {
        yield segment.segment
    }
}, 1)
