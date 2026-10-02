import { dfdlT } from "../dfdl/dfdlT"

/**
 * # andThen
 *
 * ```ts
 * function Async.andThen<T, U>(
 *     target: Promise<T>,
 *     onResolved: (value: NoInfer<T>) => U | PromiseLike<U>,
 *     onRejected?:
 *         | ((reason: any) => U | PromiseLike<U>)
 *         | null
 *         | undefined,
 * ): Promise<U>
 * ```
 *
 * Transforms resolved promise values with `onResolved`. This is an alias for `Async.then`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Async } from "@monstermann/fn";
 *
 * Async.andThen(Async.resolve(5), (x) => x * 2); // Promise<10>
 * ```
 *
 * ```ts [data-last]
 * import { Async } from "@monstermann/fn";
 *
 * pipe(
 *     Async.resolve(5),
 *     Async.andThen((x) => x * 2),
 * ); // Promise<10>
 * ```
 *
 */
export const andThen: {
    <T, U>(
        onResolved: (value: NoInfer<T>) => U | PromiseLike<U>,
        onRejected?: ((reason: any) => U | PromiseLike<U>) | null | undefined
    ): (target: Promise<T>) => Promise<U>
    <T, U>(
        target: Promise<T>,
        onResolved: (value: NoInfer<T>) => U | PromiseLike<U>,
        onRejected?: ((reason: any) => U | PromiseLike<U>) | null | undefined
    ): Promise<U>
} = dfdlT(<T, U>(
    target: Promise<T>,
    onResolved: (value: NoInfer<T>) => U | PromiseLike<U>,
    onRejected?: ((reason: any) => U | PromiseLike<U>) | null | undefined,
): Promise<U> => {
    return target.then(onResolved, onRejected)
}, 2)
