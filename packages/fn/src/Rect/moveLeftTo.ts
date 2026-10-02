import type { Rect } from "."
import { dfdl } from "../dfdl/dfdl"
import { merge } from "./merge"

/**
 * # moveLeftTo
 *
 * ```ts
 * function Rect.moveLeftTo(rect: Rect, left: number): Rect
 * ```
 *
 * Moves the rectangle so its left edge is positioned at the specified x-coordinate.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.moveLeftTo({ left: 10, top: 20, width: 100, height: 50 }, 50);
 * // { left: 50, top: 20, width: 100, height: 50 }
 * ```
 *
 * ```ts [data-last]
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.moveLeftTo(50));
 * // { left: 50, top: 20, width: 100, height: 50 }
 * ```
 *
 */
export const moveLeftTo = dfdl((rect: Rect, left: number): Rect => {
    return merge(rect, { left })
}, 2)
