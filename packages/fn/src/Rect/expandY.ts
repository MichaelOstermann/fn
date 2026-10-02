import type { Rect } from "."
import { dfdl } from "../dfdl/dfdl"
import { merge } from "./merge"

/**
 * # expandY
 *
 * ```ts
 * function Rect.expandY(rect: Rect, amount: number): Rect
 * ```
 *
 * Expands the rectangle vertically by the specified amount.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.expandY({ left: 10, top: 20, width: 100, height: 50 }, 10);
 * // { left: 10, top: 10, width: 100, height: 70 }
 * ```
 *
 * ```ts [data-last]
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.expandY(10));
 * // { left: 10, top: 10, width: 100, height: 70 }
 * ```
 *
 */
export const expandY = dfdl((rect: Rect, amount: number): Rect => {
    const d = Math.max(amount, 0)
    return merge(rect, {
        height: rect.height + (d * 2),
        top: rect.top - d,
    })
}, 2)
