import type { Rect } from "."
import { dfdl } from "../dfdl/dfdl"
import { merge } from "./merge"

/**
 * # expandX
 *
 * ```ts
 * function Rect.expandX(rect: Rect, amount: number): Rect
 * ```
 *
 * Expands the rectangle horizontally by the specified amount.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.expandX({ left: 10, top: 20, width: 100, height: 50 }, 10);
 * // { left: 0, top: 20, width: 120, height: 50 }
 * ```
 *
 * ```ts [data-last]
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.expandX(10));
 * // { left: 0, top: 20, width: 120, height: 50 }
 * ```
 *
 */
export const expandX = dfdl((rect: Rect, amount: number): Rect => {
    const d = Math.max(amount, 0)
    return merge(rect, {
        left: rect.left - d,
        width: rect.width + (d * 2),
    })
}, 2)
