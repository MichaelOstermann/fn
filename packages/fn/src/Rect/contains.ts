import type { Rect } from "."
import { dfdl } from "../dfdl/dfdl"

/**
 * # contains
 *
 * ```ts
 * function Rect.contains(a: Rect, b: Rect): boolean
 * ```
 *
 * Checks if rectangle `a` completely contains rectangle `b` within its boundaries.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.contains(
 *     { left: 0, top: 0, width: 100, height: 100 },
 *     { left: 10, top: 20, width: 50, height: 30 },
 * );
 * // true
 * ```
 *
 * ```ts [data-last]
 * pipe(
 *     { left: 0, top: 0, width: 100, height: 100 },
 *     Rect.contains({ left: 10, top: 20, width: 50, height: 30 }),
 * );
 * // true
 * ```
 *
 */
export const contains = dfdl((a: Rect, b: Rect): boolean => {
    return a.left <= b.left
        && a.top <= b.top
        && (a.left + a.width) >= (b.left + b.width)
        && (a.top + a.height) >= (b.top + b.height)
}, 2)
