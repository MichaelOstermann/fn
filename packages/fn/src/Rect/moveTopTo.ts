import type { Rect } from "."
import { dfdl } from "../dfdl"
import { merge } from "./merge"

/**
 * # moveTopTo
 *
 * ```ts
 * function Rect.moveTopTo(rect: Rect, top: number): Rect
 * ```
 *
 * Moves the rectangle so its top edge is positioned at the specified y-coordinate.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.moveTopTo({ left: 10, top: 20, width: 100, height: 50 }, 50);
 * // { left: 10, top: 50, width: 100, height: 50 }
 * ```
 *
 * ```ts [data-last]
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.moveTopTo(50));
 * // { left: 10, top: 50, width: 100, height: 50 }
 * ```
 *
 */
export const moveTopTo = dfdl((rect: Rect, top: number): Rect => {
    return merge(rect, { top })
}, 2)
