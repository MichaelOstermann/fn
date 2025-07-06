import type { NonNil } from "../internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `isSome(value)`
 *
 * Checks if a value is not `null` or `undefined`. Returns `true` if the value is neither `null` nor `undefined`, otherwise returns `false`.
 *
 * ```ts
 * isSome(0); // true
 * isSome(""); // true
 * isSome(false); // true
 * isSome(null); // false
 */
export const isSome: {
    <T>(): (value: T) => value is NonNil<T>
    <T>(value: T): value is NonNil<T>
} = dfdlT(<T>(value: T): value is NonNil<T> => {
    return value != null
}, 1)
