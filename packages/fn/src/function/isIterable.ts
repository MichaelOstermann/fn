import { dfdlT } from "@monstermann/dfdl"

/**
 * `isIterable(value)`
 *
 * Checks if a value is iterable by testing for the presence of `Symbol.iterator`.
 *
 * ```ts
 * isIterable([1, 2, 3]); // true
 * isIterable("hello"); // true
 * isIterable(42); // false
 * ```
 *
 * ```ts
 * pipe([1, 2, 3], isIterable()); // true
 * pipe(42, isIterable()); // false
 * ```
 */
export const isIterable: {
    (): (value: unknown) => value is Iterable<unknown>
    (value: unknown): value is Iterable<unknown>
} = dfdlT((value: unknown): value is Iterable<unknown> => {
    return value != null && typeof (value as any)[Symbol.iterator] === "function"
}, 1)
