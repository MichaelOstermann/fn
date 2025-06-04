import { dual } from "@monstermann/dfdl"

/**
 * `orElse(target, onRejected)`
 *
 * Catches rejected promises and handles them with `onRejected`. This is an alias for `Promise.catch`.
 *
 * ```ts
 * orElse(Promise.reject("error"), () => "fallback"); // Promise<"fallback">
 * ```
 *
 * ```ts
 * pipe(
 *     Promise.reject("error"),
 *     orElse(() => "fallback"),
 * ); // Promise<"fallback">
 * ```
 */
export const orElse: {
    <T, U>(onRejected: (reason: unknown) => U | PromiseLike<U>): (target: Promise<T>) => Promise<T | U>
    <T, U>(target: Promise<T>, onRejected: (reason: unknown) => U | PromiseLike<U>): Promise<T | U>
} = dual(2, <T, U>(target: Promise<T>, onRejected: (reason: unknown) => U | PromiseLike<U>): Promise<T | U> => {
    return target.catch(onRejected)
})
