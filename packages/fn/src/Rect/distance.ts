import type { Rect } from "."
import { dfdl } from "../dfdl"

/**
 * # distance
 *
 * ```ts
 * function Rect.distance(a: Rect, b: Rect): number
 * ```
 *
 * Calculates the shortest distance between two rectangles. Returns 0 if the rectangles intersect.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.distance(
 *     { left: 0, top: 0, width: 50, height: 50 },
 *     { left: 100, top: 0, width: 50, height: 50 },
 * );
 * // 50
 * ```
 *
 * ```ts [data-last]
 * pipe(
 *     { left: 0, top: 0, width: 50, height: 50 },
 *     Rect.distance({ left: 100, top: 0, width: 50, height: 50 }),
 * );
 * // 50
 * ```
 *
 */
export const distance = dfdl((a: Rect, b: Rect): number => {
    const x = Math.max(0, a.left - (b.left + b.width), b.left - (a.left + a.width))
    const y = Math.max(0, a.top - (b.top + b.height), b.top - (a.top + a.height))
    return Math.hypot(x, y)
})
