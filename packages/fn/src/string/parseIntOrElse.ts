import { dual } from "@monstermann/dfdl"

/**
 * `parseIntOrElse(target, orElse)`
 *
 * Parses `target` string and returns an integer, or the result of calling `orElse` function with `target` if parsing fails.
 *
 * ```ts
 * parseIntOrElse("42", () => 0); // 42
 * parseIntOrElse("abc", (str) => str.length); // 3
 * ```
 *
 * ```ts
 * pipe(
 *     "42",
 *     parseIntOrElse(() => 0),
 * ); // 42
 *
 * pipe(
 *     "abc",
 *     parseIntOrElse((str) => str.length),
 * ); // 3
 * ```
 */
export const parseIntOrElse: {
    <T>(orElse: (target: string) => T): (target: string) => number | T
    <T>(target: string, orElse: (target: string) => T): number | T
} = dual(2, <T>(target: string, orElse: (target: string) => T): number | T => {
    const value = Number.parseInt(target)
    return Number.isFinite(value) ? value : orElse(target)
})
