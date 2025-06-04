import { dual } from "@monstermann/dfdl"

/**
 * `when(predicate, onTrue)`
 *
 * Conditionally transforms a value when the predicate is true, otherwise returns the original value.
 *
 * ```ts
 * when(
 *     5,
 *     (x) => x > 3,
 *     (x) => x * 2,
 * ); // 10
 *
 * when(
 *     2,
 *     (x) => x > 3,
 *     (x) => x * 2,
 * ); // 2
 * ```
 *
 * ```ts
 * pipe(
 *     5,
 *     when(
 *         (x) => x > 3,
 *         (x) => x * 2,
 *     ),
 * ); // 10
 *
 * pipe(
 *     2,
 *     when(
 *         (x) => x > 3,
 *         (x) => x * 2,
 *     ),
 * ); // 2
 * ```
 */
export const when: {
    <T, U extends T, V>(
        predicate: (value: T) => value is U,
        onTrue: (value: U) => V
    ): (value: T) => T | V

    <T, V>(
        predicate: (value: T) => boolean,
        onTrue: (value: T) => V
    ): (value: T) => T | V

    <T, U extends T, V>(
        value: T,
        predicate: (value: T) => value is U,
        onTrue: (value: U) => V
    ): T | V

    <T, V>(
        value: T,
        predicate: (value: T) => boolean,
        onTrue: (value: T) => V
    ): T | V
} = dual(3, <T, V>(
    value: T,
    predicate: (value: T) => boolean,
    onTrue: (value: T) => V,
): T | V => {
    return predicate(value)
        ? onTrue(value)
        : value
})
