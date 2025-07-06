import type { NonNil } from "../internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `or(target, or)`
 *
 * Returns the target value if it's not `null` or `undefined`, otherwise returns the fallback value. Uses the nullish coalescing operator to provide a default value for null or undefined inputs.
 *
 * ```ts
 * or(5, 10); // 5
 * or(null, 10); // 10
 * or(undefined, 10); // 10
 * or(0, 10); // 0
 * ```
 *
 * ```ts
 * pipe(5, or(10)); // 5
 * pipe(null, or(10)); // 10
 * ```
 */
export const or: {
    <T, U>(or: U): (target: T) => NonNil<T> | U
    <T, U>(target: T, or: U): NonNil<T> | U
} = dfdlT((target: any, or: any): any => {
    return target ?? or
}, 2)
