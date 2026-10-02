/**
 * # create
 *
 * ```ts
 * function Num.create(target?: any): number
 * ```
 *
 * An alias for `Number(target)`.
 *
 * ## Example
 *
 * ## Example
 *
 * ```ts
 * import { Num } from "@monstermann/fn";
 *
 * Num.create("10"); // 10
 * ```
 *
 */
export function create(target?: any): number {
    return globalThis.Number(target)
}
