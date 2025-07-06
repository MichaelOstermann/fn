import { dfdlT } from "@monstermann/dfdl"

/**
 * `mapEach(target, fn)`
 *
 * Transforms each value in the `target` set using the `fn` function and returns a new set with the transformed values.
 *
 * ```ts
 * mapEach(new Set([1, 2, 3]), (x) => x * 2); // Set([2, 4, 6])
 * mapEach(new Set(["a", "b"]), (x) => x.toUpperCase()); // Set(['A', 'B'])
 * ```
 *
 * ```ts
 * pipe(
 *     new Set([1, 2, 3]),
 *     mapEach((x) => x * 2),
 * ); // Set([2, 4, 6])
 *
 * pipe(
 *     new Set(["a", "b"]),
 *     mapEach((x) => x.toUpperCase()),
 * ); // Set(['A', 'B'])
 * ```
 */
export const mapEach: {
    <T, U>(fn: (value: NoInfer<T>, target: ReadonlySet<NoInfer<T>>) => U): (target: Set<T>) => Set<U>
    <T, U>(fn: (value: NoInfer<T>, target: ReadonlySet<NoInfer<T>>) => U): (target: ReadonlySet<T>) => ReadonlySet<U>

    <T, U>(target: Set<T>, fn: (value: NoInfer<T>, target: ReadonlySet<NoInfer<T>>) => U): Set<U>
    <T, U>(target: ReadonlySet<T>, fn: (value: NoInfer<T>, target: ReadonlySet<NoInfer<T>>) => U): ReadonlySet<U>
} = dfdlT((target: any, fn: any): any => {
    let hasChanges = false
    const result = new Set()
    for (const prev of target) {
        const next = fn(prev, target)
        hasChanges ||= prev !== next
        result.add(next)
    }
    return hasChanges ? result : target
}, 2)
