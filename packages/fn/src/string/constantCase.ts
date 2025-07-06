import type { ConstantCase } from "string-ts"
import { dfdlT } from "@monstermann/dfdl"
import { constantCase as apply } from "string-ts"

/**
 * `constantCase(target)`
 *
 * Converts `target` string to CONSTANT_CASE format.
 *
 * ```ts
 * constantCase("hello world"); // "HELLO_WORLD"
 * constantCase("helloWorld"); // "HELLO_WORLD"
 * ```
 *
 * ```ts
 * pipe("hello world", constantCase()); // "HELLO_WORLD"
 * pipe("helloWorld", constantCase()); // "HELLO_WORLD"
 * ```
 */
export const constantCase: {
    (): <T extends string>(target: T) => ConstantCase<T>
    <T extends string>(target: T): ConstantCase<T>
} = dfdlT(<T extends string>(target: T): ConstantCase<T> => {
    return apply(target)
}, 1)
