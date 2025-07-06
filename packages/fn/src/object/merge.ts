import { dual } from "@monstermann/dfdl"
import { isMutable, markAsMutable } from "@monstermann/remmi"

/**
 * `merge(target, source)`
 *
 * Merges properties from `source` object into `target` object.
 *
 * ```ts
 * merge({ a: 1, b: 2 }, { a: 3, c: 4 }); // { a: 3, b: 2 }
 * ```
 *
 * ```ts
 * pipe({ a: 1, b: 2 }, merge({ a: 3, c: 4 })); // { a: 3, b: 2 }
 * ```
 */
export const merge: {
    <T extends object>(source: Partial<NoInfer<T>>): (target: T) => T
    <T extends object>(target: T, source: Partial<NoInfer<T>>): T
} = dual(2, <T extends object>(target: T, source: Partial<NoInfer<T>>): T => {
    for (const key in source) {
        if (target[key as keyof T] !== source[key as keyof T]) {
            if (isMutable(target)) return Object.assign(target, source)
            else return markAsMutable({ ...target, ...source })
        }
    }
    return target
})
