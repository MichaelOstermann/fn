import type { Rect } from "."
import { dfdl } from "../dfdl/dfdl"

type RectEdges = {
    readonly bottom: number
    readonly left: number
    readonly right: number
    readonly top: number
}

/**
 * # fromEdges
 *
 * ```ts
 * function Rect.fromEdges(edges: { bottom: number, left: number, right: number, top: number }): Rect
 * ```
 *
 * Creates a rectangle from edge coordinates.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.fromEdges({ left: 10, top: 20, right: 110, bottom: 70 });
 * // { left: 10, top: 20, width: 100, height: 50 }
 * ```
 *
 * ```ts [data-last]
 * pipe({ left: 10, top: 20, right: 110, bottom: 70 }, Rect.fromEdges());
 * // { left: 10, top: 20, width: 100, height: 50 }
 * ```
 *
 */
export const fromEdges = dfdl((edges: RectEdges): Rect => {
    const top = Math.min(edges.top, edges.bottom)
    const left = Math.min(edges.left, edges.right)
    const bottom = Math.max(edges.top, edges.bottom)
    const right = Math.max(edges.left, edges.right)
    return {
        height: bottom - top,
        left,
        top,
        width: right - left,
    }
}, 1)
