import { dual } from "@monstermann/dfdl"

/**
 * `tap(fn)`
 *
 * Executes a function with the provided value and returns the original value unchanged.
 *
 * ```ts
 * tap(5, (x) => console.log(x)); // logs 5, returns 5
 * ```
 *
 * ```ts
 * pipe(
 *     5,
 *     tap((x) => console.log(x)),
 * ); // logs 5, returns 5
 * ```
 */
export const tap: {
    <T>(fn: (value: NoInfer<T>) => any): (target: T) => T
    <T>(target: T, fn: (value: NoInfer<T>) => any): T
} = dual(2, <T>(target: T, fn: (value: NoInfer<T>) => any): T => {
    fn(target)
    return target
})
