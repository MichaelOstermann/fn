import type { NonNil } from "../internals/types"
import { dual } from "@monstermann/dfdl"

/**
 * `filter(target, predicate)`
 *
 * Filters a value based on a predicate function. If the value is `null` or `undefined`, it returns the value unchanged. If the value satisfies the predicate, it returns the value. Otherwise, it returns `undefined`.
 *
 * ```ts
 * filter(5, (x) => x > 3); // 5
 * filter(2, (x) => x > 3); // undefined
 * filter(null, (x) => x > 3); // null
 * filter(undefined, (x) => x > 3); // undefined
 * ```
 *
 * ```ts
 * pipe(
 *     5,
 *     filter((x) => x > 3),
 * ); // 5
 *
 * pipe(
 *     2,
 *     filter((x) => x > 3),
 * ); // undefined
 * ```
 */
export const filter: {
    <T, U extends NonNil<T>>(predicate: (value: NoInfer<NonNil<T>>) => value is U): (target: T) => U | undefined
    <T>(predicate: (value: NoInfer<NonNil<T>>) => boolean): (target: T) => T | undefined

    <T, U extends NonNil<T>>(target: T, predicate: (value: NoInfer<NonNil<T>>) => value is U): U | undefined
    <T>(target: T, predicate: (value: NoInfer<NonNil<T>>) => boolean): T | undefined
} = dual(2, <T>(target: T, predicate: (value: NoInfer<NonNil<T>>) => boolean): T | undefined => {
    if (target == null) return target
    if (!predicate(target as NonNil<T>)) return undefined
    return target
})
