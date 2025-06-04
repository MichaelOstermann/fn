import { dual } from "@monstermann/dfdl"

/**
 * `isNotFinite(target)`
 *
 * Returns `true` if `target` is not a finite number, otherwise `false`.
 *
 * ```ts
 * isNotFinite(Infinity); // true
 * isNotFinite(-Infinity); // true
 * isNotFinite(NaN); // true
 * isNotFinite(42); // false
 * isNotFinite(3.14); // false
 * ```
 *
 * ```ts
 * pipe(Infinity, isNotFinite()); // true
 * pipe(-Infinity, isNotFinite()); // true
 * pipe(NaN, isNotFinite()); // true
 * pipe(42, isNotFinite()); // false
 * pipe(3.14, isNotFinite()); // false
 * ```
 */
export const isNotFinite: {
    (): (target: number) => boolean
    (target: number): boolean
} = dual(1, (target: number): boolean => {
    return !Number.isFinite(target)
})
