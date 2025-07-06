import { dfdlT } from "@monstermann/dfdl"

/**
 * `isNone(value)`
 *
 * Checks if a value is `null` or `undefined`. Returns `true` if the value is either `null` or `undefined`, otherwise returns `false`.
 *
 * ```ts
 * isNone(null); // true
 * isNone(undefined); // true
 * isNone(0); // false
 */
export const isNone: {
    (): (value: unknown) => value is null | undefined
    (value: unknown): value is null | undefined
} = dfdlT((value: unknown): value is null | undefined => {
    return value == null
}, 1)
