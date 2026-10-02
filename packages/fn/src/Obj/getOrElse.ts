import type { AllUnionFields } from "type-fest"
import { dfdlT } from "../dfdlT"

/**
 * # getOrElse
 *
 * ```ts
 * function Obj.getOrElse<
 *     T extends object,
 *     U extends keyof AllUnionFields<T>,
 *     V,
 * >(
 *     target: T,
 *     key: U,
 *     orElse: (target: NoInfer<T>) => V,
 * ): Exclude<AllUnionFields<T>[U] | V, null | undefined>
 * ```
 *
 * Returns the value of `key` property from `target` object, or the result of calling `orElse` function with `target` if not found or nullish.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Obj } from "@monstermann/fn";
 *
 * Obj.getOrElse({ a: 1, b: 2 }, "a", () => 0); // 1
 * Obj.getOrElse({ a: 1, b: 2 }, "c", (obj) => Obj.keys(obj).length); // 2
 * ```
 *
 * ```ts [data-last]
 * import { Obj } from "@monstermann/fn";
 *
 * pipe(
 *     { a: 1, b: 2 },
 *     Obj.getOrElse("a", () => 0),
 * ); // 1
 *
 * pipe(
 *     { a: 1, b: 2 },
 *     Obj.getOrElse("c", (obj) => Obj.keys(obj).length),
 * ); // 2
 * ```
 *
 */
export const getOrElse: {
    <T extends object, U extends keyof AllUnionFields<T>, V>(key: U, orElse: (target: NoInfer<T>) => V): (target: T) => Exclude<AllUnionFields<T>[U] | V, null | undefined>
    <T extends object, U extends keyof AllUnionFields<T>, V>(target: T, key: U, orElse: (target: NoInfer<T>) => V): Exclude<AllUnionFields<T>[U] | V, null | undefined>
} = dfdlT((target: any, key: any, orElse: any): any => {
    return target[key] ?? orElse(target)
}, 3)
