import { dfdlT } from "../dfdl/dfdlT"

const CHAR_MAP: Record<string, string> = {
    Æ: "Ae",
    æ: "ae",
    Đ: "D",
    đ: "d",
    Ð: "D",
    ð: "d",
    Ħ: "H",
    ħ: "h",
    Ĳ: "IJ",
    ĳ: "ij",
    ı: "i",
    Ł: "L",
    ł: "l",
    Ŀ: "L",
    ŀ: "l",
    Ŋ: "N",
    ŋ: "n",
    Ø: "O",
    ø: "o",
    Œ: "Oe",
    œ: "oe",
    ĸ: "k",
    ſ: "s",
    ß: "ss",
    Ŧ: "T",
    ŧ: "t",
    Þ: "Th",
    þ: "th",
    ŉ: "'n",
}

// eslint-disable-next-line regexp/prefer-character-class
const CHAR_RE = new RegExp(Object.keys(CHAR_MAP).join("|"), "g")

/**
 * # deburr
 *
 * ```ts
 * function Str.deburr(target: string): string
 * ```
 *
 * Removes diacritical marks from `target` string and converts special characters to their ASCII equivalents.
 *
 * The function normalizes the string, strips combining diacritical marks, and replaces special characters like ligatures (Æ, œ) and extended Latin characters (ø, ß, þ) with their closest ASCII representations.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.deburr("café"); // "cafe"
 * Str.deburr("naïve résumé"); // "naive resume"
 * Str.deburr("Æsop's Œuvres"); // "Aesop's Oeuvres"
 * Str.deburr("Ørsted"); // "Orsted"
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("café", Str.deburr()); // "cafe"
 * pipe("naïve résumé", Str.deburr()); // "naive resume"
 * pipe("Æsop's Œuvres", Str.deburr()); // "Aesop's Oeuvres"
 * pipe("Ørsted", Str.deburr()); // "Orsted"
 * ```
 *
 */
export const deburr: {
    (): (target: string) => string
    (target: string): string
} = dfdlT((target: string): string => {
    return target
        .normalize("NFD")
        .replace(/[\u0300-\u036F\uFE20-\uFE23]/g, "")
        .replace(CHAR_RE, char => CHAR_MAP[char] || char)
        .normalize("NFC")
}, 1)
