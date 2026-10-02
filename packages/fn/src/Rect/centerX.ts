import type { Rect } from "."
import { dfdl } from "../dfdl"

/**
 * # centerX
 *
 * ```ts
 * function Rect.centerX(rect: Rect): number
 * ```
 *
 * Gets the horizontal center x-coordinate of a rectangle.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.centerX({ left: 10, top: 20, width: 100, height: 50 });
 * // 60
 * ```
 *
 * ```ts [data-last]
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.centerX());
 * // 60
 * ```
 *
 */
export const centerX = dfdl((rect: Rect): number => {
    return rect.left + rect.width / 2
}, 1)
