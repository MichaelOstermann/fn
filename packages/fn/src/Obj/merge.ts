import { dfdlT } from "../dfdlT"
import { isMutable } from "../isMutable"
import { markAsMutable } from "../markAsMutable"

/**
 * # merge
 *
 * ```ts
 * function Obj.merge<T extends object>(
 *     target: T,
 *     source: Partial<NoInfer<T>>,
 * ): T
 * ```
 *
 * Merges properties from `source` object into `target` object.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Obj } from "@monstermann/fn";
 *
 * Obj.merge({ a: 1, b: 2 }, { a: 3, c: 4 }); // { a: 3, b: 2 }
 * ```
 *
 * ```ts [data-last]
 * import { Obj } from "@monstermann/fn";
 *
 * pipe({ a: 1, b: 2 }, Obj.merge({ a: 3, c: 4 })); // { a: 3, b: 2 }
 * ```
 *
 */
export const merge: {
    <T extends object>(source: Partial<NoInfer<T>>): (target: T) => T
    <T extends object>(target: T, source: Partial<NoInfer<T>>): T
} = dfdlT(<T extends object>(target: T, source: Partial<NoInfer<T>>): T => {
    for (const key in source) {
        if (target[key as keyof T] !== source[key as keyof T]) {
            if (isMutable(target)) return Object.assign(target, source)
            else return markAsMutable({ ...target, ...source })
        }
    }
    return target
}, 2)
