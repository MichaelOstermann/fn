import { dual } from "@monstermann/dfdl"

/**
 * `ifElse(predicate, onTrue, onFalse)`
 *
 * Conditionally applies one of two functions based on a predicate result.
 *
 * ```ts
 * ifElse(
 *     5,
 *     (x) => x > 3,
 *     (x) => x * 2,
 *     (x) => x * 3,
 * ); // 10
 * ```
 *
 * ```ts
 * pipe(
 *     5,
 *     ifElse(
 *         (x) => x > 3,
 *         (x) => x * 2,
 *         (x) => x * 3,
 *     ),
 * ); // 10
 * ```
 */
export const ifElse: {
    <T, A, B>(
        predicate: (value: T) => boolean,
        onTrue: (value: T) => A,
        onFalse: (value: T) => B
    ): (value: T) => A | B

    <T, A, B>(
        value: T,
        predicate: (value: T) => boolean,
        onTrue: (value: T) => A,
        onFalse: (value: T) => B
    ): A | B
} = dual(4, <T, A, B>(
    value: T,
    predicate: (value: T) => boolean,
    onTrue: (value: T) => A,
    onFalse: (value: T) => B,
): A | B => {
    return predicate(value)
        ? onTrue(value)
        : onFalse(value)
})
