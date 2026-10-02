import type { Rect } from "."
import { dfdl } from "../dfdl"

/**
 * # centerY
 *
 * ```ts
 * function Rect.centerY(rect: Rect): number
 * ```
 *
 * Gets the vertical center y-coordinate of a rectangle.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.centerY({ left: 10, top: 20, width: 100, height: 50 });
 * // 45
 * ```
 *
 * ```ts [data-last]
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.centerY());
 * // 45
 * ```
 *
 */
export const centerY = dfdl((rect: Rect): number => {
    return rect.top + rect.height / 2
}, 1)
