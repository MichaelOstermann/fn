import type { Entries } from "type-fest"
import { dfdlT } from "../dfdlT"

/**
 * # entries
 *
 * ```ts
 * function Obj.entries<T extends object>(target: T): Entries<T>
 * ```
 *
 * Returns an array of key-value pairs from `target` object.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Obj } from "@monstermann/fn";
 *
 * Obj.entries({ a: 1, b: 2, c: 3 }); // [["a", 1], ["b", 2], ["c", 3]]
 * ```
 *
 * ```ts [data-last]
 * import { Obj } from "@monstermann/fn";
 *
 * pipe({ a: 1, b: 2, c: 3 }, Obj.entries()); // [["a", 1], ["b", 2], ["c", 3]]
 * ```
 *
 */
export const entries: {
    (): <T extends object>(target: T) => Entries<T>
    <T extends object>(target: T): Entries<T>
} = dfdlT(<T extends object>(target: T): any => {
    return Object.entries(target)
}, 1)
