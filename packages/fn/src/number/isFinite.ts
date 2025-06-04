import { dual } from "@monstermann/dfdl"

/**
 * `isFinite(target)`
 *
 * Returns `true` if `target` is a finite number, otherwise `false`.
 *
 * ```ts
 * isFinite(42); // true
 * isFinite(3.14); // true
 * isFinite(Infinity); // false
 * isFinite(-Infinity); // false
 * isFinite(NaN); // false
 * ```
 *
 * ```ts
 * pipe(42, isFinite()); // true
 * pipe(3.14, isFinite()); // true
 * pipe(Infinity, isFinite()); // false
 * pipe(-Infinity, isFinite()); // false
 * pipe(NaN, isFinite()); // false
 * ```
 */
export const isFinite: {
    (): (target: number) => boolean
    (target: number): boolean
} = dual(1, (target: number): boolean => {
    return Number.isFinite(target)
})
