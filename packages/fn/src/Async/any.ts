/**
 * # any
 *
 * ```ts
 * function Async.any<T extends readonly unknown[] | []>(values: T): Promise<Awaited<T[number]>>
 * ```
 *
 * Waits for the first promise to resolve and returns its result. If all promises reject, it rejects with an AggregateError.
 *
 * ## Example
 *
 * ```ts
 * import { Async } from "@monstermann/fn";
 *
 * const result = await Async.any([
 *     Async.reject("error1"),
 *     Async.resolve(2),
 *     Async.resolve(3),
 * ]); // 2
 * ```
 *
 */
export const any = globalThis.Promise.any.bind(globalThis.Promise)
