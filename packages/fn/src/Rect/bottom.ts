import type { Rect } from "."
import { dfdl } from "../dfdl"

/**
 * # bottom
 *
 * ```ts
 * function Rect.bottom(rect: Rect): number
 * ```
 *
 * Gets the bottom y-coordinate of a rectangle.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.bottom({ left: 10, top: 20, width: 100, height: 50 });
 * // 70
 * ```
 *
 * ```ts [data-last]
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.bottom());
 * // 70
 * ```
 *
 */
export const bottom = dfdl((rect: Rect): number => {
    return rect.top + rect.height
}, 1)
