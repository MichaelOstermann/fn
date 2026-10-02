import type { Rect } from "."
import { dfdl } from "../dfdl/dfdl"
import { setWidth } from "./setWidth"

/**
 * # setRight
 *
 * ```ts
 * function Rect.setRight(rect: Rect, right: number): Rect
 * ```
 *
 * Sets the right edge of a rectangle to a specific x-coordinate. The rectangle's width is adjusted to reach the new right position while keeping the left edge fixed.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.setRight({ left: 10, top: 20, width: 100, height: 50 }, 130);
 * // { left: 10, top: 20, width: 120, height: 50 }
 * ```
 *
 * ```ts [data-last]
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.setRight(130));
 * // { left: 10, top: 20, width: 120, height: 50 }
 * ```
 *
 */
export const setRight = dfdl((rect: Rect, right: number): Rect => {
    return setWidth(rect, Math.max(rect.left, right) - rect.left)
}, 2)
