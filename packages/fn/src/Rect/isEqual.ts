import type { Rect } from "."
import { dfdl } from "../dfdl/dfdl"

/**
 * # isEqual
 *
 * ```ts
 * function Rect.isEqual(a: Rect, b: Rect): boolean
 * ```
 *
 * Checks if two rectangles are equal by comparing their position and dimensions.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.isEqual(
 *     { left: 10, top: 20, width: 100, height: 50 },
 *     { left: 10, top: 20, width: 100, height: 50 },
 * );
 * // true
 * ```
 *
 * ```ts [data-last]
 * pipe(
 *     { left: 10, top: 20, width: 100, height: 50 },
 *     Rect.isEqual({ left: 10, top: 20, width: 100, height: 50 }),
 * );
 * // true
 * ```
 *
 */
export const isEqual = dfdl((a: Rect, b: Rect): boolean => {
    return a === b
        || (a.left === b.left
            && a.width === b.width
            && a.top === b.top
            && a.height === b.height)
}, 2)
