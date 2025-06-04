import { dual } from "@monstermann/dfdl"

/**
 * `isTruthy(target)`
 *
 * Checks if a value is truthy (not false, 0, "", null, or undefined).
 *
 * ```ts
 * isTruthy("hello"); // true
 * isTruthy(1); // true
 * isTruthy(false); // false
 * isTruthy(""); // false
 * ```
 *
 * ```ts
 * pipe("hello", isTruthy()); // true
 * pipe(false, isTruthy()); // false
 * ```
 */
export const isTruthy: {
    <T>(): (target: T) => target is Exclude<T, "" | 0 | false | null | undefined>
    <T>(target: T): target is Exclude<T, "" | 0 | false | null | undefined>
} = dual(1, <T>(target: T): target is Exclude<T, "" | 0 | false | null | undefined> => {
    return !!target
})
