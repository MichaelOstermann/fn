import type { AllUnionFields } from "type-fest"
import type { UnknownRecord } from "./internals/types"
import { dual } from "@monstermann/dfdl"

/**
 * `get(target, key)`
 *
 * Returns the value of `key` property from `target` object, or undefined if not found.
 *
 * ```ts
 * get({ a: 1, b: 2 }, "a"); // 1
 * get({ a: 1, b: 2 }, "c"); // undefined
 * ```
 *
 * ```ts
 * pipe({ a: 1, b: 2 }, get("a")); // 1
 * pipe({ a: 1, b: 2 }, get("c")); // undefined
 * ```
 */
export const get: {
    <T extends UnknownRecord, U extends keyof AllUnionFields<T>>(key: U): (target: T) => AllUnionFields<T>[U] | undefined
    <T extends UnknownRecord, U extends keyof AllUnionFields<T>>(target: T, key: U): AllUnionFields<T>[U] | undefined
} = dual(2, (target: any, key: any): any => {
    return target[key]
})
