/**
 * # allSettled
 *
 * ```ts
 * function Async.allSettled<T extends readonly unknown[] | []>(values: T): Promise<{ -readonly [P in keyof T]: PromiseSettledResult<Awaited<T[P]>>; }>
 * ```
 *
 * Waits for all promises to settle (resolve or reject) and returns an array of their results with status information.
 *
 * ## Example
 *
 * ```ts
 * import { Async } from "@monstermann/fn";
 *
 * const results = await Async.allSettled([
 *     Async.resolve(1),
 *     Async.reject("error"),
 *     Async.resolve(3),
 * ]);
 * // [
 * //   { status: "fulfilled", value: 1 },
 * //   { status: "rejected", reason: "error" },
 * //   { status: "fulfilled", value: 3 }
 * // ]
 * ```
 *
 */
export const allSettled = globalThis.Promise.allSettled.bind(globalThis.Promise)
