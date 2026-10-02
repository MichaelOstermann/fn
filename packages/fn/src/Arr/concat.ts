import { dfdlT } from "../dfdl/dfdlT"
import { markAsMutable } from "../remmi/markAsMutable"

/**
 * # concat
 *
 * ```ts
 * function Arr.concat<T>(target: T[], source: NoInfer<T>[]): T[]
 * ```
 *
 * Concatenates `source` array to the end of `array`, returning a new array with the combined elements.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Arr } from "@monstermann/fn";
 *
 * Arr.concat([1, 2], [3, 4]); // [1, 2, 3, 4]
 * ```
 *
 * ```ts [data-last]
 * import { Arr } from "@monstermann/fn";
 *
 * pipe([1, 2], Arr.concat([3, 4])); // [1, 2, 3, 4]
 * ```
 *
 */
export const concat: {
    <T>(source: NoInfer<T>[]): (target: T[]) => T[]
    <T>(target: T[], source: NoInfer<T>[]): T[]
} = dfdlT(<T>(target: T[], source: NoInfer<T>[]): T[] => {
    if (source.length === 0) return target
    if (target.length === 0) return source
    return markAsMutable(target.concat(source))
}, 2)
