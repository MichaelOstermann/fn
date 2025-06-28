import { dual } from "@monstermann/dfdl"

/**
 * `orElse(target, orElse)`
 *
 * Returns the numeric value of `target` if it's a finite number, otherwise calls the `orElse` function with the original value and returns its result.
 *
 * ```ts
 * orElse(42, () => 0); // 42
 * orElse(NaN, () => 0); // 0
 * orElse(Infinity, (val) => `Not finite: ${val}`); // "Not finite: Infinity"
 * orElse("hello", (val) => val.length); // 5
 * ```
 *
 * ```ts
 * pipe(
 *     42,
 *     orElse(() => 0),
 * ); // 42
 *
 * pipe(
 *     NaN,
 *     orElse(() => 0),
 * ); // 0
 *
 * pipe(
 *     Infinity,
 *     orElse((val) => `Not finite: ${val}`),
 * ); // "Not finite: Infinity"
 *
 * pipe(
 *     "hello",
 *     orElse((val) => val.length),
 * ); // 5
 * ```
 */
export const orElse: {
    <T, U>(orElse: (value: NoInfer<T>) => U): (target: T) => Extract<T, number> | U
    <T, U>(target: T, orElse: (value: NoInfer<T>) => U): Extract<T, number> | U
} = dual(2, <T, U>(target: T, orElse: (value: NoInfer<T>) => U): Extract<T, number> | U => {
    return Number.isFinite(target)
        ? target as Extract<T, number>
        : orElse(target)
})
