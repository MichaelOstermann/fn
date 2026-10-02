/**
 * # create
 *
 * ```ts
 * function Str.create(value?: any): string
 * ```
 *
 * An alias for `String(target)`.
 *
 * ## Example
 *
 * ```ts
 * import { Str } from "@monstermann/fn";
 *
 * Str.create(10); // "10"
 * ```
 *
 */
export function create(value?: any): string {
    return globalThis.String(value)
}
