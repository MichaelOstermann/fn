import type { NonNil } from "../internals/types"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `map(target, map)`
 *
 * Applies a mapping function to a value if it's not `null` or `undefined`. If the target value is `null` or `undefined`, it returns the target unchanged. Otherwise, it applies the mapping function and returns the result.
 *
 * ```ts
 * map(5, (x) => x * 2); // 10
 * map(null, (x) => x * 2); // null
 * map(undefined, (x) => x * 2); // undefined
 * ```
 *
 * ```ts
 * pipe(
 *     5,
 *     map((x) => x * 2),
 * ); // 10
 * pipe(
 *     null,
 *     map((x) => x * 2),
 * ); // null
 * ```
 */
export const map: {
    <T, U>(map: (value: NoInfer<NonNil<T>>) => U): (target: T) => Exclude<T, NonNil<T>> | U
    <T, U>(target: T, map: (value: NoInfer<NonNil<T>>) => U): Exclude<T, NonNil<T>> | U
} = dfdlT((target: any, map: any): any => {
    if (target == null) return target
    return map(target)
}, 2)
