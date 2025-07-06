import type { NonNil } from "../internals/types"
import { dual } from "@monstermann/dfdl"

/**
 * `mapOr(target, map, or)`
 *
 * Applies a mapping function to a value if it's not `null` or `undefined`, otherwise returns a default value. If the target value is `null` or `undefined`, it returns the `or` value. Otherwise, it applies the mapping function and returns the result.
 *
 * ```ts
 * mapOr(5, (x) => x * 2, 0); // 10
 * mapOr(null, (x) => x * 2, 0); // 0
 * mapOr(undefined, (x) => x * 2, -1); // -1
 * ```
 *
 * ```ts
 * pipe(
 *     5,
 *     mapOr((x) => x * 2, 0),
 * ); // 10
 * pipe(
 *     null,
 *     mapOr((x) => x * 2, 0),
 * ); // 0
 * ```
 */
export const mapOr: {
    <T, U, V>(map: (value: NoInfer<NonNil<T>>, or: V) => U): (target: T) => U | V
    <T, U, V>(target: T, map: (value: NoInfer<NonNil<T>>) => U, or: V): U | V
} = dual(3, (target: any, map: any, or: any): any => {
    if (target == null) return or
    return map(target)
})
