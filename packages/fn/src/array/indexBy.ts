import { dfdlT } from "@monstermann/dfdl"

/**
 * `indexBy(target, by, transform?)`
 *
 * Creates a record by indexing the `target` array using the `by` function to generate keys. Optionally transforms values using the `transform` function.
 *
 * ```ts
 * const users = [
 *     { id: 1, name: "Alice" },
 *     { id: 2, name: "Bob" },
 * ];
 *
 * indexBy(users, (user) => user.id);
 * // { 1: { id: 1, name: 'Alice' }, 2: { id: 2, name: 'Bob' } }
 *
 * indexBy(
 *     users,
 *     (user) => user.id,
 *     (user) => user.name,
 * ); // { 1: "Alice", 2: "Bob" }
 * ```
 *
 * ```ts
 * pipe(
 *     users,
 *     indexBy((user) => user.id),
 * ); // { 1: { id: 1, name: 'Alice' }, 2: { id: 2, name: 'Bob' } }
 *
 * pipe(
 *     users,
 *     indexBy(
 *         (user) => user.id,
 *         (user) => user.name,
 *     ),
 * ); // { 1: "Alice", 2: "Bob" }
 * ```
 */
export const indexBy: {
    <T extends object, U extends PropertyKey, V>(
        target: readonly T[],
        by: (value: NoInfer<T>, idx: number, target: readonly NoInfer<T>[]) => U,
        transform: (value: NoInfer<T>, key: U, idx: number, target: readonly NoInfer<T>[]) => V,
    ): Record<U, V>

    <T extends object, U extends PropertyKey>(
        target: readonly T[],
        by: (value: NoInfer<T>, idx: number, target: readonly NoInfer<T>[]) => U,
    ): Record<U, T>
} = dfdlT(<T extends object, U extends PropertyKey, V>(
    target: readonly T[],
    by: (value: NoInfer<T>, idx: number, target: readonly NoInfer<T>[]) => U,
    transform?: (value: NoInfer<T>, key: U, idx: number, target: readonly NoInfer<T>[]) => V,
): Record<U, T | V> => {
    return target.reduce((acc, value, idx) => {
        const key = by(value, idx, target)
        acc[key] = transform ? transform(value, key, idx, target) : value
        return acc
    }, {} as Record<U, T | V>)
}, args => Array.isArray(args[0]))
