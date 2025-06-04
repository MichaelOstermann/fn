import { dual } from "@monstermann/dfdl"

/**
 * `isRegExp(target)`
 *
 * Checks if a value is a RegExp instance.
 *
 * ```ts
 * isRegExp(/hello/); // true
 * isRegExp("hello"); // false
 * ```
 *
 * ```ts
 * pipe(/hello/, isRegExp()); // true
 * pipe("hello", isRegExp()); // false
 * ```
 */
export const isRegExp: {
    (): (target: unknown) => target is RegExp
    (target: unknown): target is RegExp
} = dual(1, (target: unknown): target is RegExp => {
    return target instanceof RegExp
})
