import type { CamelCase } from "string-ts"
import { dfdlT } from "@monstermann/dfdl"
import { camelCase as apply } from "string-ts"

/**
 * `camelCase(target)`
 *
 * Converts `target` string to camelCase format.
 *
 * ```ts
 * camelCase("hello world"); // "helloWorld"
 * camelCase("hello-world"); // "helloWorld"
 * ```
 *
 * ```ts
 * pipe("hello world", camelCase()); // "helloWorld"
 * pipe("hello-world", camelCase()); // "helloWorld"
 * ```
 */
export const camelCase: {
    (): <T extends string>(target: T) => CamelCase<T>
    <T extends string>(target: T): CamelCase<T>
} = dfdlT(<T extends string>(target: T): CamelCase<T> => {
    return apply(target)
}, 1)
