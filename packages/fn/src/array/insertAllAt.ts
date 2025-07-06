import { dfdlT } from "@monstermann/dfdl"
import { markAsMutable } from "@monstermann/remmi"

/**
 * `insertAllAt(array, index, values)`
 *
 * Inserts all elements from `values` at the specified `index` in `array`, returning a new array with the inserted elements. Supports iterables for the `values` parameter.
 *
 * ```ts
 * insertAllAt([1, 2, 3], 1, [10, 20]); // [1, 10, 20, 2, 3]
 * ```
 *
 * ```ts
 * pipe([1, 2, 3], insertAllAt(1, [10, 20])); // [1, 10, 20, 2, 3]
 * ```
 */
export const insertAllAt: {
    <T>(idx: number, values: Iterable<NoInfer<T>>): (target: T[]) => T[]
    <T>(idx: number, values: Iterable<NoInfer<T>>): (target: readonly T[]) => readonly T[]

    <T>(target: T[], idx: number, values: Iterable<NoInfer<T>>): T[]
    <T>(target: readonly T[], idx: number, values: Iterable<NoInfer<T>>): readonly T[]
} = dfdlT(<T>(target: T[], idx: number, values: Iterable<NoInfer<T>>): T[] => {
    if (idx < 0 || idx > target.length) return target
    const vs = Array.from(values)
    const bLen = vs.length
    if (bLen === 0) return target
    const aLen = target.length
    const result = Array.from({ length: aLen + bLen }) as any
    for (let i = 0; i < aLen; i++) {
        result[i >= idx ? i + bLen : i] = target[i]
    }
    for (let i = 0; i < bLen; i++) {
        result[idx + i] = vs[i]
    }
    return markAsMutable(result)
}, 3)
