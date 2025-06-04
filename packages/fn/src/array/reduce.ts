import { dual } from "@monstermann/dfdl"

/**
 * `reduce(array, initial, reducer)`
 *
 * Reduces `array` to a single value by executing the `reducer` function on each element, starting with the `initial` accumulator value.
 *
 * ```ts
 * reduce([1, 2, 3, 4], 0, (acc, x) => acc + x); // 10
 * ```
 *
 * ```ts
 * pipe(
 *     [1, 2, 3, 4],
 *     reduce(0, (acc, x) => acc + x),
 * ); // 10
 * ```
 */
export const reduce: {
    <T, U>(
        acc: U,
        reducer: (acc: NoInfer<U>, value: NoInfer<T>, idx: number, target: readonly NoInfer<T>[]) => NoInfer<U>
    ): (target: readonly T[]) => U

    <T, U>(
        target: readonly T[],
        acc: U,
        reducer: (acc: NoInfer<U>, value: NoInfer<T>, idx: number, target: readonly NoInfer<T>[]) => NoInfer<U>
    ): U
} = dual(3, <T, U>(
    target: readonly T[],
    acc: U,
    reducer: (acc: NoInfer<U>, value: NoInfer<T>, idx: number, target: readonly NoInfer<T>[]) => NoInfer<U>,
): U => {
    return target.reduce(reducer, acc)
})
