import type { ConstantCase } from "string-ts"
import { constantCase as apply } from "string-ts"
import { dfdlT } from "../dfdl/dfdlT"

/**
 * # constantCase
 *
 * ```ts
 * function Str.constantCase<T extends string>(
 *     target: T,
 * ): ConstantCase<T>
 * ```
 *
 * Converts `target` string to CONSTANT_CASE format.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Str } from "@monstermann/fn";
 *
 * Str.constantCase("hello world"); // "HELLO_WORLD"
 * Str.constantCase("helloWorld"); // "HELLO_WORLD"
 * ```
 *
 * ```ts [data-last]
 * import { Str } from "@monstermann/fn";
 *
 * pipe("hello world", Str.constantCase()); // "HELLO_WORLD"
 * pipe("helloWorld", Str.constantCase()); // "HELLO_WORLD"
 * ```
 *
 */
export const constantCase: {
    (): <T extends string>(target: T) => ConstantCase<T>
    <T extends string>(target: T): ConstantCase<T>
} = dfdlT(<T extends string>(target: T): ConstantCase<T> => {
    return apply(target)
}, 1)
