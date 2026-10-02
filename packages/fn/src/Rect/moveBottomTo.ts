import type { Rect } from "."
import { dfdl } from "../dfdl/dfdl"
import { merge } from "./merge"

/**
 * # moveBottomTo
 *
 * ```ts
 * function Rect.moveBottomTo(rect: Rect, bottom: number): Rect
 * ```
 *
 * Moves the rectangle so its bottom edge is positioned at the specified y-coordinate.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.moveBottomTo({ left: 10, top: 20, width: 100, height: 50 }, 100);
 * // { left: 10, top: 50, width: 100, height: 50 }
 * ```
 *
 * ```ts [data-last]
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.moveBottomTo(100));
 * // { left: 10, top: 50, width: 100, height: 50 }
 * ```
 *
 */
export const moveBottomTo = dfdl((rect: Rect, bottom: number): Rect => {
    return merge(rect, { top: bottom - rect.height })
}, 2)
