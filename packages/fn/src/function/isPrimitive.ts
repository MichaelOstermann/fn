import type { Primitive } from "type-fest"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `isPrimitive(value)`
 *
 * Checks if a value is a primitive type (string, number, boolean, null, undefined, symbol, bigint).
 *
 * ```ts
 * isPrimitive("hello"); // true
 * isPrimitive(42); // true
 * isPrimitive({}); // false
 * isPrimitive([]); // false
 * ```
 *
 * ```ts
 * pipe("hello", isPrimitive()); // true
 * pipe({}, isPrimitive()); // false
 * ```
 */
export const isPrimitive: {
    (): (value: unknown) => value is Primitive
    (value: unknown): value is Primitive
} = dfdlT((value: unknown): value is Primitive => {
    if (value == null) return true
    const t = typeof value
    if (t === "object") return false
    if (t === "function") return false
    return true
}, 1)
