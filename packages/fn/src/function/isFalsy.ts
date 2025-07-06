import { dfdlT } from "@monstermann/dfdl"

type Falsy<T> = T extends unknown
    ? T extends string ? "" extends T ? "" : never
        : T extends number ? 0 extends T ? 0 : never
            : T extends boolean ? false extends T ? false : never
                : null extends T ? null
                    : undefined extends T ? undefined
                        : never
    : never

/**
 * `isFalsy(target)`
 *
 * Checks if a value is falsy (false, 0, "", null, undefined).
 *
 * ```ts
 * isFalsy(false); // true
 * isFalsy(0); // true
 * isFalsy(""); // true
 * isFalsy("hello"); // false
 * ```
 *
 * ```ts
 * pipe(false, isFalsy()); // true
 * pipe("hello", isFalsy()); // false
 * ```
 */
export const isFalsy: {
    <T>(): (target: T) => target is Falsy<T>
    <T>(target: T): target is Falsy<T>
} = dfdlT(<T>(target: T): target is Falsy<T> => {
    return !target
}, 1)
