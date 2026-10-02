import type { Rect } from "."
import { dfdl } from "../dfdl/dfdl"
import { merge } from "./merge"

/**
 * # expand
 *
 * ```ts
 * function Rect.expand(rect: Rect, amount: number): Rect
 * ```
 *
 * Expands the rectangle in all directions by the specified amount.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.expand({ left: 10, top: 20, width: 100, height: 50 }, 10);
 * // { left: 0, top: 10, width: 120, height: 70 }
 * ```
 *
 * ```ts [data-last]
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.expand(10));
 * // { left: 0, top: 10, width: 120, height: 70 }
 * ```
 *
 */
export const expand = dfdl((rect: Rect, amount: number): Rect => {
    const d = Math.max(amount, 0)
    return merge(rect, {
        height: rect.height + (d * 2),
        left: rect.left - d,
        top: rect.top - d,
        width: rect.width + (d * 2),
    })
}, 2)
