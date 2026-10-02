import type { Rect } from "."
import { dfdl } from "../dfdl/dfdl"
import { clamp } from "./internals/clamp"
import { merge } from "./merge"

/**
 * # shrinkY
 *
 * ```ts
 * function Rect.shrinkY(rect: Rect, amount: number): Rect
 * ```
 *
 * Shrinks a rectangle vertically by moving the top and bottom edges inward by the specified amount.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.shrinkY({ left: 10, top: 20, width: 100, height: 60 }, 10);
 * // { left: 10, top: 30, width: 100, height: 40 }
 * ```
 *
 * ```ts [data-last]
 * pipe({ left: 10, top: 20, width: 100, height: 60 }, Rect.shrinkY(10));
 * // { left: 10, top: 30, width: 100, height: 40 }
 * ```
 *
 */
export const shrinkY = dfdl((rect: Rect, amount: number): Rect => {
    const dh = clamp(amount, 0, rect.height / 2)
    return merge(rect, {
        height: rect.height - (dh * 2),
        top: rect.top + dh,
    })
}, 2)
