import type { AllUnionFields } from "type-fest"
import type { UnknownRecord } from "./internals/types"
import { dual } from "@monstermann/dfdl"

/**
 * `values(target)`
 *
 * Returns an array of `target` object's enumerable property values.
 *
 * ```ts
 * values({ a: 1, b: 2, c: 3 }); // [1, 2, 3]
 * ```
 *
 * ```ts
 * pipe({ a: 1, b: 2, c: 3 }, values()); // [1, 2, 3]
 * ```
 */
export const values: {
    (): <T extends UnknownRecord>(target: T) => AllUnionFields<T> extends infer U ? U[keyof U][] : never
    <T extends UnknownRecord>(target: T): AllUnionFields<T> extends infer U ? U[keyof U][] : never
} = dual(1, <T extends object>(target: T): any => {
    return Object.values(target)
})
