import { dual } from "@monstermann/dfdl"
import { is } from "./is"

/**
 * `isNot(source)`
 *
 * Checks if two values are strictly unequal using `===` or `Object.is`.
 *
 * ```ts
 * isNot(5, 5); // false
 * isNot("hello", "world"); // true
 * ```
 *
 * ```ts
 * pipe(5, isNot(5)); // false
 * pipe("hello", isNot("world")); // true
 * ```
 */
export const isNot: {
    <T, U extends T>(source: U): (target: T) => target is Exclude<T, U>
    <T, U extends T>(target: T, source: U): target is Exclude<T, U>
} = dual(2, <T, U extends T>(target: T, source: U): target is Exclude<T, U> => {
    return !is(target, source)
})
