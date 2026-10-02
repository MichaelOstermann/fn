import type { Rect } from "."
import { dfdl } from "../dfdl"

/**
 * # top
 *
 * ```ts
 * function Rect.top(rect: Rect): number
 * ```
 *
 * Gets the top y-coordinate of a rectangle.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.top({ left: 10, top: 20, width: 100, height: 50 });
 * // 20
 * ```
 *
 * ```ts [data-last]
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.top());
 * // 20
 * ```
 *
 */
export const top = dfdl((rect: Rect): number => {
    return rect.top
}, 1)
