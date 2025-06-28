import { dual } from "@monstermann/dfdl"

/**
 * `then(target, onResolved)`
 *
 * Transforms resolved promise values with `onResolved`. This is an alias for `Promise.then`.
 *
 * ```ts
 * then(Promise.resolve(5), (x) => x * 2); // Promise<10>
 * ```
 *
 * ```ts
 * pipe(
 *     Promise.resolve(5),
 *     then((x) => x * 2),
 * ); // Promise<10>
 * ```
 */
export const then: {
    <T, U>(onResolved: (value: NoInfer<T>) => U | PromiseLike<U>): (target: Promise<T>) => Promise<U>
    <T, U>(target: Promise<T>, onResolved: (value: NoInfer<T>) => U | PromiseLike<U>): Promise<U>
} = dual(2, <T, U>(target: Promise<T>, onResolved: (value: NoInfer<T>) => U | PromiseLike<U>): Promise<U> => {
    return target.then(onResolved)
})
