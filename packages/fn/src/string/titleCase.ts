import type { TitleCase } from "string-ts"
import { dual } from "@monstermann/dfdl"
import { titleCase as apply } from "string-ts"

/**
 * `titleCase(target)`
 *
 * Converts `target` string to Title Case format.
 *
 * ```ts
 * titleCase("hello world"); // "Hello World"
 * titleCase("hello-world"); // "Hello World"
 * ```
 *
 * ```ts
 * pipe("hello world", titleCase()); // "Hello World"
 * pipe("hello-world", titleCase()); // "Hello World"
 * ```
 */
export const titleCase: {
    (): <T extends string>(target: T) => TitleCase<T>
    <T extends string>(target: T): TitleCase<T>
} = dual(1, <T extends string>(target: T): TitleCase<T> => {
    return apply(target)
})
