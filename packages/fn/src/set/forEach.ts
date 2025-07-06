import { dfdlT } from "@monstermann/dfdl"

/**
 * `forEach(target, fn)`
 *
 * Iterates over each value in the `target` set, calling the `fn` function for each value. Returns the original set unchanged.
 *
 * ```ts
 * forEach(new Set([1, 2, 3]), (value) => console.log(value)); // Set([1, 2, 3])
 * ```
 *
 * ```ts
 * pipe(
 *     new Set([1, 2, 3]),
 *     forEach((value) => console.log(value)),
 * ); // Set([1, 2, 3])
 * ```
 */
export const forEach: {
    <T>(fn: (value: NoInfer<T>, target: ReadonlySet<NoInfer<T>>) => unknown): (target: Set<T>) => Set<T>
    <T>(fn: (value: NoInfer<T>, target: ReadonlySet<NoInfer<T>>) => unknown): (target: ReadonlySet<T>) => ReadonlySet<T>

    <T>(target: Set<T>, fn: (value: NoInfer<T>, target: ReadonlySet<NoInfer<T>>) => unknown): Set<T>
    <T>(target: ReadonlySet<T>, fn: (value: NoInfer<T>, target: ReadonlySet<NoInfer<T>>) => unknown): ReadonlySet<T>
} = dfdlT(<T>(target: Set<T>, fn: (value: NoInfer<T>, target: ReadonlySet<NoInfer<T>>) => unknown): Set<T> => {
    for (const value of target) fn(value, target)
    return target
}, 2)
