import type { AllUnionFields } from "type-fest"
import { dfdlT } from "../dfdlT"

/**
 * # values
 *
 * ```ts
 * function Obj.values<T extends object>(
 *     target: T,
 * ): AllUnionFields<T> extends infer U ? U[keyof U][] : never
 * ```
 *
 * Returns an array of `target` object's enumerable property values.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Obj } from "@monstermann/fn";
 *
 * Obj.values({ a: 1, b: 2, c: 3 }); // [1, 2, 3]
 * ```
 *
 * ```ts [data-last]
 * import { Obj } from "@monstermann/fn";
 *
 * pipe({ a: 1, b: 2, c: 3 }, Obj.values()); // [1, 2, 3]
 * ```
 *
 */
export const values: {
    (): <T extends object>(target: T) => AllUnionFields<T> extends infer U ? U[keyof U][] : never
    <T extends object>(target: T): AllUnionFields<T> extends infer U ? U[keyof U][] : never
} = dfdlT(<T extends object>(target: T): any => {
    return Object.values(target)
}, 1)
