import type { Rect } from "."
import { dfdl } from "../dfdl/dfdl"
import { fromEdges } from "./fromEdges"
import { isEqual } from "./isEqual"

/**
 * # union
 *
 * ```ts
 * function Rect.union(a: Rect, b: Rect): Rect
 * ```
 *
 * Calculates the union of two rectangles, returning the smallest rectangle that contains both rectangles.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.union(
 *     { left: 0, top: 0, width: 50, height: 50 },
 *     { left: 25, top: 25, width: 50, height: 50 },
 * );
 * // { left: 0, top: 0, width: 75, height: 75 }
 * ```
 *
 * ```ts [data-last]
 * pipe(
 *     { left: 0, top: 0, width: 50, height: 50 },
 *     Rect.union({ left: 25, top: 25, width: 50, height: 50 }),
 * );
 * // { left: 0, top: 0, width: 75, height: 75 }
 * ```
 *
 */
export const union = dfdl((a: Rect, b: Rect): Rect => {
    if (isEqual(a, b)) return a
    return fromEdges({
        bottom: Math.max(a.top + a.height, b.top + b.height),
        left: Math.min(a.left, b.left),
        right: Math.max(a.left + a.width, b.left + b.width),
        top: Math.min(a.top, b.top),
    })
})
