import type { NonNil } from "../internals/types"
import { dfdlT } from "@monstermann/dfdl"
import { FnError } from "../function/FnError"

/**
 * `orThrow(target)`
 *
 * Returns the target value if it's not `null` or `undefined`, otherwise throws an error. This function is useful for asserting that a value is not null or undefined.
 *
 * ```ts
 * orThrow(5); // 5
 * orThrow("hello"); // "hello"
 * orThrow(null); // throws FnError
 * orThrow(undefined); // throws FnError
 * ```
 *
 * ```ts
 * pipe(5, orThrow()); // 5
 * pipe(null, orThrow()); // throws FnError
 * ```
 */
export const orThrow: {
    <T>(): (target: T) => NonNil<T>
    <T>(target: T): NonNil<T>
} = dfdlT((target: any): any => {
    if (target != null) return target
    throw new FnError("Nullable.orThrow: Value was nullable.", [target])
}, 1)
