import type { AllUnionFields } from "type-fest"
import type { NonNil } from "../internals/types"
import type { UnknownRecord } from "./internals/types"
import { dual } from "@monstermann/dfdl"
import { FnError } from "../function/FnError"

/**
 * `getOrThrow(target, key)`
 *
 * Returns the value of `key` property from `target` object, or throws an error if not found or null/undefined.
 *
 * ```ts
 * getOrThrow({ a: 1, b: 2 }, "a"); // 1
 * getOrThrow({ a: 1, b: 2 }, "c"); // throws FnError
 * ```
 *
 * ```ts
 * pipe({ a: 1, b: 2 }, getOrThrow("a")); // 1
 * pipe({ a: 1, b: 2 }, getOrThrow("c")); // throws FnError
 * ```
 */
export const getOrThrow: {
    <T extends UnknownRecord, U extends keyof AllUnionFields<T>>(key: U): (target: T) => NonNil<AllUnionFields<T>[U]>
    <T extends UnknownRecord, U extends keyof AllUnionFields<T>>(target: T, key: U): NonNil<AllUnionFields<T>[U]>
} = dual(2, (target: any, key: any): any => {
    const value = target[key]
    if (value != null) return value
    throw new FnError("Object.getOrThrow: Value not found.", [target, key])
})
