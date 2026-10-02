import type { Rect } from "."
import { dfdl } from "../dfdl"
import { merge } from "./merge"

/**
 * # setCenterX
 *
 * ```ts
 * function Rect.setCenterX(rect: Rect, x: number): Rect
 * ```
 *
 * Sets the horizontal center position of the rectangle to the specified x-coordinate.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.setCenterX({ left: 10, top: 20, width: 100, height: 50 }, 75);
 * // { left: 25, top: 20, width: 100, height: 50 }
 * ```
 *
 * ```ts [data-last]
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.setCenterX(75));
 * // { left: 25, top: 20, width: 100, height: 50 }
 * ```
 *
 */
export const setCenterX = dfdl((rect: Rect, x: number): Rect => {
    return merge(rect, { left: x - (rect.width / 2) })
}, 2)
