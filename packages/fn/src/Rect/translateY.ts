import type { Rect } from "."
import { dfdl } from "../dfdl"
import { merge } from "./merge"

/**
 * # translateY
 *
 * ```ts
 * function Rect.translateY(rect: Rect, amount: number): Rect
 * ```
 *
 * Translates (moves) the rectangle vertically by the specified amount.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.translateY({ left: 10, top: 20, width: 100, height: 50 }, 15);
 * // { left: 10, top: 35, width: 100, height: 50 }
 * ```
 *
 * ```ts [data-last]
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.translateY(15));
 * // { left: 10, top: 35, width: 100, height: 50 }
 * ```
 *
 */
export const translateY = dfdl((rect: Rect, amount: number): Rect => {
    return merge(rect, { top: rect.top + amount })
}, 2)
