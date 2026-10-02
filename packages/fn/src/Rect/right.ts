import type { Rect } from "."
import { dfdl } from "../dfdl/dfdl"

/**
 * # right
 *
 * ```ts
 * function Rect.right(rect: Rect): number
 * ```
 *
 * Gets the right x-coordinate of a rectangle.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.right({ left: 10, top: 20, width: 100, height: 50 });
 * // 110
 * ```
 *
 * ```ts [data-last]
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.right());
 * // 110
 * ```
 *
 */
export const right = dfdl((rect: Rect): number => {
    return rect.left + rect.width
}, 1)
