import type { CamelCase } from "string-ts"
import { dual } from "@monstermann/dfdl"
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
} = dual(1, <T extends string>(target: T): CamelCase<T> => {
    return apply(target)
})
