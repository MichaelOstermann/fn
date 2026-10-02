import { dfdlT } from "../dfdl/dfdlT"

/**
 * # mapEach
 *
 * ```ts
 * function Sets.mapEach<T, U>(
 *     target: ReadonlySet<T>,
 *     fn: (
 *         value: NoInfer<T>,
 *         target: ReadonlySet<NoInfer<T>>,
 *     ) => U,
 * ): ReadonlySet<U>
 * ```
 *
 * Returns a new set with each value transformed by the mapping function.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Sets } from "@monstermann/fn";
 *
 * Sets.mapEach(Sets.create([1, 2, 3]), (x) => x * 2); // Set([2, 4, 6])
 * Sets.mapEach(Sets.create(["a", "b"]), (x) => x.toUpperCase()); // Set(['A', 'B'])
 * ```
 *
 * ```ts [data-last]
 * import { Sets } from "@monstermann/fn";
 *
 * pipe(
 *     Sets.create([1, 2, 3]),
 *     Sets.mapEach((x) => x * 2),
 * ); // Set([2, 4, 6])
 *
 * pipe(
 *     Sets.create(["a", "b"]),
 *     Sets.mapEach((x) => x.toUpperCase()),
 * ); // Set(['A', 'B'])
 * ```
 *
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
