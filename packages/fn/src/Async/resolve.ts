/**
 * # resolve
 *
 * ```ts
 * function Async.resolve<T>(value: T): Promise<Awaited<T>>
 * ```
 *
 * Creates a promise that resolves with the given value. If the value is already a promise, it returns that promise.
 *
 * ## Example
 *
 * ```ts
 * import { Async } from "@monstermann/fn";
 *
 * const promise = Async.resolve(42); // Promise<42>
 * ```
 *
 */
export const resolve = globalThis.Promise.resolve.bind(globalThis.Promise)
