import type { Rect } from "."
import { dfdl } from "../dfdl"
import { clamp } from "./internals/clamp"
import { merge } from "./merge"

/**
 * # takeLeftPx
 *
 * ```ts
 * function Rect.takeLeftPx(rect: Rect, amount: number): Rect
 * ```
 *
 * Takes a specified number of pixels from the left side of the rectangle, creating a new rectangle that represents only the left portion.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.takeLeftPx({ left: 10, top: 20, width: 100, height: 80 }, 40);
 * // { left: 10, top: 20, width: 40, height: 80 }
 * ```
 *
 * ```ts [data-last]
 * pipe({ left: 10, top: 20, width: 100, height: 80 }, Rect.takeLeftPx(40));
 * // { left: 10, top: 20, width: 40, height: 80 }
 * ```
 *
 */
export const takeLeftPx = dfdl((rect: Rect, amount: number): Rect => {
    return merge(rect, { width: clamp(amount, 0, rect.width) })
}, 2)
