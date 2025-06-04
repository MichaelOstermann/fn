import type { PascalCase } from "string-ts"
import { dual } from "@monstermann/dfdl"
import { pascalCase as apply } from "string-ts"

/**
 * `pascalCase(target)`
 *
 * Converts `target` string to PascalCase format.
 *
 * ```ts
 * pascalCase("hello world"); // "HelloWorld"
 * pascalCase("hello-world"); // "HelloWorld"
 * ```
 *
 * ```ts
 * pipe("hello world", pascalCase()); // "HelloWorld"
 * pipe("hello-world", pascalCase()); // "HelloWorld"
 * ```
 */
export const pascalCase: {
    (): <T extends string>(target: T) => PascalCase<T>
    <T extends string>(target: T): PascalCase<T>
} = dual(1, <T extends string>(target: T): PascalCase<T> => {
    return apply(target)
})
