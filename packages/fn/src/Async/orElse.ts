import { dfdlT } from "../dfdl/dfdlT"

/**
 * # orElse
 *
 * ```ts
 * function Async.orElse<T, U>(
 *     target: Promise<T>,
 *     onRejected: (reason: unknown) => U | PromiseLike<U>,
 * ): Promise<T | U>
 * ```
 *
 * Catches rejected promises and handles them with `onRejected`. This is an alias for `Async.catch`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Async } from "@monstermann/fn";
 *
 * Async.orElse(Async.reject("error"), () => "fallback"); // Promise<"fallback">
 * ```
 *
 * ```ts [data-last]
 * import { Async } from "@monstermann/fn";
 *
 * pipe(
 *     Async.reject("error"),
 *     Async.orElse(() => "fallback"),
 * ); // Promise<"fallback">
 * ```
 *
 */
export const orElse: {
    <T, U>(onRejected: (reason: unknown) => U | PromiseLike<U>): (target: Promise<T>) => Promise<T | U>
    <T, U>(target: Promise<T>, onRejected: (reason: unknown) => U | PromiseLike<U>): Promise<T | U>
} = dfdlT(<T, U>(target: Promise<T>, onRejected: (reason: unknown) => U | PromiseLike<U>): Promise<T | U> => {
    return target.catch(onRejected)
}, 2)
