import type { NonNil } from "../internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `orElse(target, orElse)`
 *
 * Returns the target value if it's not `null` or `undefined`, otherwise calls a fallback function and returns its result. The fallback function is only executed when the target is null or undefined.
 *
 * ```ts
 * orElse(5, () => 10); // 5
 * orElse(null, () => 10); // 10
 * orElse(undefined, Math.random); // calls Math.random()
 * orElse(0, () => 10); // 0
 * ```
 *
 * ```ts
 * pipe(
 *     5,
 *     orElse(() => 10),
 * ); // 5
 * pipe(
 *     null,
 *     orElse(() => 10),
 * ); // 10
 * ```
 */
export const orElse: {
    <T, U>(orElse: () => U): (target: T) => NonNil<T> | U
    <T, U>(target: T, orElse: () => U): NonNil<T> | U
} = dfdlT((target: any, orElse: any): any => {
    return target ?? orElse()
}, 2)
