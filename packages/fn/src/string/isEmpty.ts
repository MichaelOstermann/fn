import { dual } from "@monstermann/dfdl"

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
} = dual(1, (target: string): boolean => {
    return target === ""
})
