import type { Rect } from "."
import { dfdl } from "../dfdl"

/**
 * # width
 *
 * ```ts
 * function Rect.width(rect: Rect): number
 * ```
 *
 * Gets the width of a rectangle.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.width({ left: 10, top: 20, width: 100, height: 50 });
 * // 100
 * ```
 *
 * ```ts [data-last]
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.width());
 * // 100
 * ```
 *
 */
export const width = dfdl((rect: Rect): number => {
    return rect.width
}, 1)
