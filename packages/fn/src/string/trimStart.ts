import type { TrimStart } from "string-ts"
import { dual } from "@monstermann/dfdl"

/**
 * `trimStart(target)`
 *
 * Removes whitespace from the start of `target` string.
 *
 * ```ts
 * trimStart("  hello world  "); // "hello world  "
 * ```
 *
 * ```ts
 * pipe("  hello world  ", trimStart()); // "hello world  "
 * ```
 */
export const trimStart: {
    (): <T extends string>(target: T) => TrimStart<T>
    <T extends string>(target: T): TrimStart<T>
} = dual(1, <T extends string>(target: T): TrimStart<T> => {
    return target.trimStart() as TrimStart<T>
})
