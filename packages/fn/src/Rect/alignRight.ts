import type { Rect } from "."
import { dfdl } from "../dfdl/dfdl"
import { moveRightTo } from "./moveRightTo"

/**
 * # alignRight
 *
 * ```ts
 * function Rect.alignRight(target: Rect, source: Rect): Rect
 * ```
 *
 * Aligns the right edge of the `target` rectangle to the right edge of the `source` rectangle by moving the `target` rectangle horizontally.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.alignRight(
 *     { left: 10, top: 10, width: 100, height: 50 },
 *     { left: 50, top: 30, width: 80, height: 40 },
 * );
 * // { left: 30, top: 10, width: 100, height: 50 }
 * ```
 *
 * ```ts [data-last]
 * pipe(
 *     { left: 10, top: 10, width: 100, height: 50 },
 *     Rect.alignRight({ left: 50, top: 30, width: 80, height: 40 }),
 * );
 * // { left: 30, top: 10, width: 100, height: 50 }
 * ```
 *
 */
export const alignRight = dfdl((target: Rect, source: Rect): Rect => {
    return moveRightTo(target, source.left + source.width)
}, 2)
