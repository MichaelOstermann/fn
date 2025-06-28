import { dual } from "@monstermann/dfdl"

/**
 * `not(predicate)`
 *
 * Negates the result of a predicate function.
 *
 * ```ts
 * not(5, (x) => x > 10); // true
 * not(15, (x) => x > 10); // false
 * ```
 *
 * ```ts
 * pipe(
 *     5,
 *     not((x) => x > 10),
 * ); // true
 *
 * pipe(
 *     15,
 *     not((x) => x > 10),
 * ); // false
 * ```
 */
export const not: {
    <T, U extends T>(predicate: (value: NoInfer<T>) => value is U): (target: T) => target is Exclude<T, U>
    <T>(predicate: (value: NoInfer<T>) => boolean): (target: T) => boolean

    <T, U extends T>(target: T, predicate: (value: NoInfer<T>) => value is U): target is Exclude<T, U>
    <T>(target: T, predicate: (value: NoInfer<T>) => boolean): boolean
} = dual(2, <T, U extends T>(target: T, predicate: (value: NoInfer<T>) => T): target is Exclude<T, U> => {
    return !predicate(target)
})
