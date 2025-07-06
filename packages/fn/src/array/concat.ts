import { dfdlT } from "@monstermann/dfdl"
import { markAsMutable } from "@monstermann/remmi"

/**
 * `concat(array, source)`
 *
 * Concatenates `source` array to the end of `array`, returning a new array with the combined elements.
 *
 * ```ts
 * concat([1, 2], [3, 4]); // [1, 2, 3, 4]
 * ```
 *
 * ```ts
 * pipe([1, 2], concat([3, 4])); // [1, 2, 3, 4]
 * ```
 */
export const concat: {
    <T>(source: NoInfer<T>[]): (target: T[]) => T[]
    <T>(target: T[], source: NoInfer<T>[]): T[]
} = dfdlT(<T>(target: T[], source: NoInfer<T>[]): T[] => {
    if (source.length === 0) return target
    if (target.length === 0) return source
    return markAsMutable(target.concat(source))
}, 2)
