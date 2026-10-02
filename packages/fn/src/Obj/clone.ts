import { dfdlT } from "../dfdl/dfdlT"
import { cloneObject } from "../remmi/cloneObject"

/**
 * # clone
 *
 * ```ts
 * function Obj.clone<T extends object>(target: T): T
 * ```
 *
 * Creates a shallow copy of an object, unless marked as mutable with `markAsMutable` inside a mutation context (see [@monstermann/remmi](https://michaelostermann.github.io/remmi/#clonearray-array)).
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Obj } from "@monstermann/fn";
 *
 * const original = { a: 1, b: 2 };
 * const copy = Obj.clone(original); // { a: 1, b: 2 }
 * ```
 *
 * ```ts [data-last]
 * import { Obj } from "@monstermann/fn";
 *
 * const original = { a: 1, b: 2 };
 * const copy = pipe(original, Obj.clone()); // { a: 1, b: 2 }
 * ```
 *
 */
export const clone: {
    (): <T extends object>(target: T) => T
    <T extends object>(target: T): T
} = dfdlT(cloneObject, 1)
