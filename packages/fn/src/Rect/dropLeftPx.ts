import type { Rect } from "."
import { dfdl } from "../dfdl"
import { clamp } from "./internals/clamp"
import { merge } from "./merge"

/**
 * # dropLeftPx
 *
 * ```ts
 * function Rect.dropLeftPx(rect: Rect, amount: number): Rect
 * ```
 *
 * Removes a specified number of pixels from the rectangle's width at the left edge, moving the left position rightward.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.dropLeftPx({ left: 10, top: 20, width: 100, height: 80 }, 25);
 * // { left: 35, top: 20, width: 75, height: 80 }
 * ```
 *
 * ```ts [data-last]
 * pipe({ left: 10, top: 20, width: 100, height: 80 }, Rect.dropLeftPx(25));
 * // { left: 35, top: 20, width: 75, height: 80 }
 * ```
 *
 */
export const dropLeftPx = dfdl((rect: Rect, amount: number): Rect => {
    const dw = clamp(amount, 0, rect.width)
    return merge(rect, {
        left: rect.left + dw,
        width: rect.width - dw,
    })
}, 2)
