import type { AllUnionFields } from "type-fest"
import type { NonNil } from "../internals/types"
import type { UnknownRecord } from "./internals/types"
import { dual } from "@monstermann/dfdl"

/**
 * `getOrElse(target, key, orElse)`
 *
 * Returns the value of `key` property from `target` object, or the result of calling `orElse` function with `target` if not found or falsy.
 *
 * ```ts
 * getOrElse({ a: 1, b: 2 }, "a", () => 0); // 1
 * getOrElse({ a: 1, b: 2 }, "c", (obj) => Object.keys(obj).length); // 2
 * ```
 *
 * ```ts
 * pipe(
 *     { a: 1, b: 2 },
 *     getOrElse("a", () => 0),
 * ); // 1
 *
 * pipe(
 *     { a: 1, b: 2 },
 *     getOrElse("c", (obj) => Object.keys(obj).length),
 * ); // 2
 * ```
 */
export const getOrElse: {
    <T extends UnknownRecord, U extends keyof AllUnionFields<T>, V>(key: U, orElse: (target: NoInfer<T>) => V): (target: T) => NonNil<AllUnionFields<T>[U] | V>
    <T extends UnknownRecord, U extends keyof AllUnionFields<T>, V>(target: T, key: U, orElse: (target: NoInfer<T>) => V): NonNil<AllUnionFields<T>[U] | V>
} = dual(3, (target: any, key: any, orElse: any): any => {
    return target[key] || orElse(target)
})
