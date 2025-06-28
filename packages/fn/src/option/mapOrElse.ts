import type { NonNil } from "../internals/types"
import { dual } from "@monstermann/dfdl"

/**
 * `mapOrElse(target, map, orElse)`
 *
 * Applies a mapping function to a value if it's not `null` or `undefined`, otherwise calls a fallback function. If the target value is `null` or `undefined`, it calls the `orElse` function and returns its result. Otherwise, it applies the mapping function and returns the result.
 *
 * ```ts
 * mapOrElse(
 *     5,
 *     (x) => x * 2,
 *     () => 0,
 * ); // 10
 *
 * mapOrElse(
 *     null,
 *     (x) => x * 2,
 *     () => 0,
 * ); // 0
 *
 * mapOrElse(
 *     undefined,
 *     (x) => x * 2,
 *     () => -1,
 * ); // -1
 * ```
 *
 * ```ts
 * pipe(
 *     5,
 *     mapOrElse(
 *         (x) => x * 2,
 *         () => 0,
 *     ),
 * ); // 10
 *
 * pipe(
 *     null,
 *     mapOrElse(
 *         (x) => x * 2,
 *         () => 0,
 *     ),
 * ); // 0
 * ```
 */
export const mapOrElse: {
    <T, U, V>(map: (value: NonNil<NoInfer<T>>, orElse: () => V) => U): (target: T) => U | V
    <T, U, V>(target: T, map: (value: NonNil<NoInfer<T>>) => U, orElse: () => V): U | V
} = dual(3, (target: any, map: any, orElse: any): any => {
    if (target == null) return orElse()
    return map(target)
})
