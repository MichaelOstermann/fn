import type { Rect } from "."
import { dfdl } from "../dfdl/dfdl"
import { merge } from "./merge"

/**
 * # translate
 *
 * ```ts
 * function Rect.translate(rect: Rect, amount: number): Rect
 * ```
 *
 * Translates (moves) the rectangle by the specified amount in both horizontal and vertical directions.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.translate({ left: 10, top: 20, width: 100, height: 50 }, 15);
 * // { left: 25, top: 35, width: 100, height: 50 }
 * ```
 *
 * ```ts [data-last]
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.translate(15));
 * // { left: 25, top: 35, width: 100, height: 50 }
 * ```
 *
 */
export const translate = dfdl((rect: Rect, amount: number): Rect => {
    return merge(rect, {
        left: rect.left + amount,
        top: rect.top + amount,
    })
}, 2)
