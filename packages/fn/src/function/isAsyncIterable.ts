import { dual } from "@monstermann/dfdl"

/**
 * `isAsyncIterable(value)`
 *
 * Checks if a value is an async iterable by testing for the presence of `Symbol.asyncIterator`.
 *
 * ```ts
 * isAsyncIterable(
 *     (async function* () {
 *         yield 1;
 *     })(),
 * ); // true
 *
 * isAsyncIterable([1, 2, 3]); // false
 * ```
 *
 * ```ts
 * pipe(
 *     (async function* () {
 *         yield 1;
 *     })(),
 *     isAsyncIterable(),
 * ); // true
 *
 * pipe([1, 2, 3], isAsyncIterable()); // false
 * ```
 */
export const isAsyncIterable: {
    (): (value: unknown) => value is AsyncIterable<unknown>
    (value: unknown): value is AsyncIterable<unknown>
} = dual(1, (value: unknown): value is AsyncIterable<unknown> => {
    return value != null && typeof (value as any)[Symbol.asyncIterator] === "function"
})
