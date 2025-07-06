import { dfdlT } from "@monstermann/dfdl"

/**
 * `is(source)`
 *
 * Checks if two values are strictly equal using `===` or `Object.is`.
 *
 * ```ts
 * is(5, 5); // true
 * is("hello", "world"); // false
 * ```
 *
 * ```ts
 * pipe(5, is(5)); // true
 * pipe("hello", is("world")); // false
 * ```
 */
export const is: {
    <T, U extends T>(source: U): (target: T) => target is U
    <T, U extends T>(target: T, source: U): target is U
} = dfdlT(<T, U extends T>(target: T, source: U): target is U => {
    return target === source || Object.is(target, source)
}, 2)
