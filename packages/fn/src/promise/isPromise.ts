import { dfdlT } from "@monstermann/dfdl"

/**
 * `isPromise(target)`
 *
 * Checks if `target` is a Promise instance.
 *
 * ```ts
 * isPromise(Promise.resolve()); // true
 * isPromise("hello"); // false
 * ```
 *
 * ```ts
 * pipe(Promise.resolve(), isPromise()); // true
 * pipe("hello", isPromise()); // false
 * ```
 */
export const isPromise: {
    (): (target: unknown) => target is Promise<unknown>
    (target: unknown): target is Promise<unknown>
} = dfdlT((target: unknown): target is Promise<unknown> => {
    return target instanceof Promise
}, 1)
