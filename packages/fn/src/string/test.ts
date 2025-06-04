import { dual } from "@monstermann/dfdl"

/**
 * `test(target, source)`
 *
 * Tests if `target` string matches the `source` regular expression.
 *
 * ```ts
 * test("hello world", /world/); // true
 * test("hello world", /\d+/); // false
 * ```
 *
 * ```ts
 * pipe("hello world", test(/world/)); // true
 * pipe("hello world", test(/\d+/)); // false
 * ```
 */
export const test: {
    (source: RegExp): (target: string) => boolean
    (target: string, source: RegExp): boolean
} = dual(2, (target: string, source: RegExp): boolean => {
    return source.test(target)
})
