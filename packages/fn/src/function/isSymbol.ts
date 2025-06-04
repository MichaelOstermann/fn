import { dual } from "@monstermann/dfdl"

/**
 * `isSymbol(target)`
 *
 * Checks if a value is a symbol.
 *
 * ```ts
 * isSymbol(Symbol("test")); // true
 * isSymbol("test"); // false
 * ```
 *
 * ```ts
 * pipe(Symbol("test"), isSymbol()); // true
 * pipe("test", isSymbol()); // false
 * ```
 */
export const isSymbol: {
    (): (target: unknown) => target is symbol
    (target: unknown): target is symbol
} = dual(1, (target: unknown): target is symbol => {
    return typeof target === "symbol"
})
