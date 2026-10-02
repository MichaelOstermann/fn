import type { Rect } from "."
import { dfdl } from "../dfdl/dfdl"
import { merge } from "./merge"

/**
 * # setCenter
 *
 * ```ts
 * function Rect.setCenter(rect: Rect, x: number, y: number): Rect
 * ```
 *
 * Sets the center point of the rectangle to the specified coordinates.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.setCenter({ left: 10, top: 20, width: 100, height: 50 }, 75, 60);
 * // { left: 25, top: 35, width: 100, height: 50 }
 * ```
 *
 * ```ts [data-last]
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.setCenter(75, 60));
 * // { left: 25, top: 35, width: 100, height: 50 }
 * ```
 *
 */
export const setCenter = dfdl((rect: Rect, x: number, y: number): Rect => {
    return merge(rect, {
        left: x - (rect.width / 2),
        top: y - (rect.height / 2),
    })
}, 3)
