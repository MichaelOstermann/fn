import type { Rect } from "."
import { dfdl } from "../dfdl"
import { clamp } from "./internals/clamp"
import { merge } from "./merge"

/**
 * # takeRightPx
 *
 * ```ts
 * function Rect.takeRightPx(rect: Rect, amount: number): Rect
 * ```
 *
 * Takes a specific number of pixels from the right side of the rectangle. Returns a new rectangle that represents the rightmost portion of the original rectangle with the specified pixel width.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.takeRightPx({ left: 10, top: 20, width: 100, height: 50 }, 30);
 * // { left: 80, top: 20, width: 30, height: 50 }
 * ```
 *
 * ```ts [data-last]
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.takeRightPx(30));
 * // { left: 80, top: 20, width: 30, height: 50 }
 * ```
 *
 */
export const takeRightPx = dfdl((rect: Rect, amount: number): Rect => {
    const width = clamp(amount, 0, rect.width)
    return merge(rect, {
        left: rect.left + rect.width - width,
        width,
    })
}, 2)
