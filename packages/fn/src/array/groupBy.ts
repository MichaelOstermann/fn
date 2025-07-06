import { dfdlT } from "@monstermann/dfdl"

/**
 * `groupBy(array, grouper, transform?)`
 *
 * Groups elements in `array` by the result of calling `grouper` function on each element, optionally transforming each element with `transform`, returning an object with keys as group values and values as arrays of elements.
 *
 * ```ts
 * groupBy(
 *     [1, 2, 3, 4],
 *     (x) => (x % 2 === 0 ? "even" : "odd"),
 *     (x) => x * 10,
 * ); // { even: [20, 40], odd: [10, 30] }
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 4],
 *     groupBy(
 *         (x) => (x % 2 === 0 ? "even" : "odd"),
 *         (x) => x * 10,
 *     ),
 * ); // { even: [20, 40], odd: [10, 30] }
 * ```
 */
export const groupBy: {
    <T extends object, U extends PropertyKey, V>(
        target: readonly T[],
        by: (value: NoInfer<T>, idx: number, target: readonly NoInfer<T>[]) => U,
        transform: (value: NoInfer<T>, key: U, idx: number, target: readonly NoInfer<T>[]) => V,
    ): Record<U, V[]>

    <T extends object, U extends PropertyKey>(
        target: readonly T[],
        by: (value: NoInfer<T>, idx: number, target: readonly NoInfer<T>[]) => U,
    ): Record<U, T[]>
} = dfdlT(<T extends object, U extends PropertyKey, V>(
    target: readonly T[],
    by: (value: NoInfer<T>, idx: number, target: readonly NoInfer<T>[]) => U,
    transform?: (value: NoInfer<T>, key: U, idx: number, target: readonly NoInfer<T>[]) => V,
): Record<U, (T | V)[]> => {
    return target.reduce((acc, value, idx) => {
        const key = by(value, idx, target)
        acc[key] ??= []
        acc[key].push(transform ? transform(value, key, idx, target) : value)
        return acc
    }, {} as Record<U, (T | V)[]>)
}, args => Array.isArray(args[0]))
