/**
 * # reject
 *
 * ```ts
 * function Async.reject<T = never>(reason?: any): Promise<T>
 * ```
 *
 * Creates a promise that is rejected with the given reason.
 *
 * ## Example
 *
 * ```ts
 * import { Async } from "@monstermann/fn";
 *
 * const promise = Async.reject("error"); // Promise<never>
 * ```
 *
 */
export const reject = globalThis.Promise.reject.bind(globalThis.Promise)
