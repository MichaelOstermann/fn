/**
 * # all
 *
 * ```ts
 * function Async.all<T>(values: Iterable<T | PromiseLike<T>>): Promise<Awaited<T>[]>
 * ```
 *
 * Waits for all promises to resolve and returns an array of their results. If any promise rejects, the entire operation rejects with that reason.
 *
 * ## Example
 *
 * ```ts
 * import { Async } from "@monstermann/fn";
 *
 * const results = await Async.all([
 *     Async.resolve(1),
 *     Async.resolve(2),
 *     Async.resolve(3),
 * ]); // [1, 2, 3]
 * ```
 *
 */
export const all = globalThis.Promise.all.bind(globalThis.Promise)
