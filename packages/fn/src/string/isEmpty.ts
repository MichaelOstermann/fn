import { dfdlT } from "@monstermann/dfdl"

/**
 * `isEmpty(target)`
 *
 * Checks if `target` string is empty.
 *
 * ```ts
 * isEmpty(""); // true
 * isEmpty("hello"); // false
 * ```
 *
 * ```ts
 * pipe("", isEmpty()); // true
 * pipe("hello", isEmpty()); // false
 * ```
 */
export const isEmpty: {
    (): (target: string) => boolean
    (target: string): boolean
} = dfdlT((target: string): boolean => {
    return target === ""
}, 1)
