import type { Rect } from "."
import { dfdl } from "../dfdl/dfdl"
import { merge } from "./merge"

/**
 * # setCenterY
 *
 * ```ts
 * function Rect.setCenterY(rect: Rect, y: number): Rect
 * ```
 *
 * Sets the vertical center position of the rectangle to the specified y-coordinate.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.setCenterY({ left: 10, top: 20, width: 100, height: 50 }, 60);
 * // { left: 10, top: 35, width: 100, height: 50 }
 * ```
 *
 * ```ts [data-last]
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.setCenterY(60));
 * // { left: 10, top: 35, width: 100, height: 50 }
 * ```
 *
 */
export const setCenterY = dfdl((rect: Rect, y: number): Rect => {
    return merge(rect, { top: y - (rect.height / 2) })
}, 2)
