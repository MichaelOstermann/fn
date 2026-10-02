import type { Rect } from "."
import { dfdl } from "../dfdl/dfdl"
import { clamp } from "./internals/clamp"
import { merge } from "./merge"

/**
 * # dropTopPct
 *
 * ```ts
 * function Rect.dropTopPct(rect: Rect, amount: number): Rect
 * ```
 *
 * Removes a percentage of the rectangle's height from the top edge, moving the top position downward. The amount should be between 0 and 1.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.dropTopPct({ left: 10, top: 20, width: 100, height: 80 }, 0.25);
 * // { left: 10, top: 40, width: 100, height: 60 }
 * ```
 *
 * ```ts [data-last]
 * pipe({ left: 10, top: 20, width: 100, height: 80 }, Rect.dropTopPct(0.25));
 * // { left: 10, top: 40, width: 100, height: 60 }
 * ```
 *
 */
export const dropTopPct = dfdl((rect: Rect, amount: number): Rect => {
    const dh = rect.height * clamp(amount, 0, 1)
    return merge(rect, {
        height: rect.height - dh,
        top: rect.top + dh,
    })
}, 2)
