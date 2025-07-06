import type { Entries } from "type-fest"
import { dual } from "@monstermann/dfdl"

/**
 * `entries(target)`
 *
 * Returns an array of key-value pairs from `target` object.
 *
 * ```ts
 * entries({ a: 1, b: 2, c: 3 }); // [["a", 1], ["b", 2], ["c", 3]]
 * ```
 *
 * ```ts
 * pipe({ a: 1, b: 2, c: 3 }, entries()); // [["a", 1], ["b", 2], ["c", 3]]
 * ```
 */
export const entries: {
    (): <T extends object>(target: T) => Entries<T>
    <T extends object>(target: T): Entries<T>
} = dual(1, <T extends object>(target: T): any => {
    return Object.entries(target)
})
