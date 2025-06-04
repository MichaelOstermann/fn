import { dual } from "@monstermann/dfdl"
import { FnError } from "../function/FnError"

/**
 * `matchOrThrow(target, source)`
 *
 * Returns the result of matching `target` string against `source` string or regular expression, or throws an error if no match is found.
 *
 * ```ts
 * matchOrThrow("hello world", "world"); // ["world", index: 6, input: "hello world", groups: undefined]
 * matchOrThrow("hello world", /\d+/); // throws FnError
 * ```
 *
 * ```ts
 * pipe("hello world", matchOrThrow("world")); // ["world", index: 6, input: "hello world", groups: undefined]
 * pipe("hello world", matchOrThrow(/\d+/)); // throws FnError
 * ```
 */
export const matchOrThrow: {
    (source: string | RegExp): (target: string) => RegExpMatchArray
    (target: string, source: string | RegExp): RegExpMatchArray
} = dual(2, (target: string, source: string | RegExp): RegExpMatchArray => {
    const match = target.match(source)
    if (match) return match
    throw new FnError("String.matchOrThrow: Value did not match.", [target, source])
})
