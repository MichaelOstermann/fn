import type { Rect } from "."
import { dfdl } from "../dfdl/dfdl"
import { clamp } from "./internals/clamp"
import { merge } from "./merge"

/**
 * Takes a specified number of pixels from the top of the rectangle. Returns a new rectangle that represents the top portion of the original rectangle, with the height set to the specified pixel amount (clamped to the original height).
 *
 * @example
 * ```ts
 * // data-first
 * Rect.takeTopPx({ left: 10, top: 20, width: 100, height: 80 }, 20);
 * // { left: 10, top: 20, width: 100, height: 20 }
 *
 * // data-last
 * pipe({ left: 10, top: 20, width: 100, height: 80 }, Rect.takeTopPx(20));
 * // { left: 10, top: 20, width: 100, height: 20 }
 * ```
 */
export const takeTopPx = dfdl((rect: Rect, amount: number): Rect => {
    return merge(rect, { height: clamp(amount, 0, rect.height) })
}, 2)
