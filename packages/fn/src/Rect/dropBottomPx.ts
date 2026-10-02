import type { Rect } from "."
import { dfdl } from "../dfdl/dfdl"
import { clamp } from "./internals/clamp"
import { merge } from "./merge"

/**
 * # dropBottomPx
 *
 * ```ts
 * function Rect.dropBottomPx(rect: Rect, amount: number): Rect
 * ```
 *
 * Removes a specified number of pixels from the rectangle's height at the bottom edge.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.dropBottomPx({ left: 10, top: 20, width: 100, height: 80 }, 20);
 * // { left: 10, top: 20, width: 100, height: 60 }
 * ```
 *
 * ```ts [data-last]
 * pipe({ left: 10, top: 20, width: 100, height: 80 }, Rect.dropBottomPx(20));
 * // { left: 10, top: 20, width: 100, height: 60 }
 * ```
 *
 */
export const dropBottomPx = dfdl((rect: Rect, amount: number): Rect => {
    return merge(rect, { height: rect.height - clamp(amount, 0, rect.height) })
}, 2)
