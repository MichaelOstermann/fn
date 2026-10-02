import type { Rect } from "."
import { dfdl } from "../dfdl"
import { moveLeftTo } from "./moveLeftTo"

/**
 * # alignLeft
 *
 * ```ts
 * function Rect.alignLeft(target: Rect, source: Rect): Rect
 * ```
 *
 * Aligns the left edge of the `target` rectangle to the left edge of the `source` rectangle by moving the `target` rectangle horizontally.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.alignLeft(
 *     { left: 10, top: 10, width: 100, height: 50 },
 *     { left: 50, top: 30, width: 80, height: 40 },
 * );
 * // { left: 50, top: 10, width: 100, height: 50 }
 * ```
 *
 * ```ts [data-last]
 * pipe(
 *     { left: 10, top: 10, width: 100, height: 50 },
 *     Rect.alignLeft({ left: 50, top: 30, width: 80, height: 40 }),
 * );
 * // { left: 50, top: 10, width: 100, height: 50 }
 * ```
 *
 */
export const alignLeft = dfdl((target: Rect, source: Rect): Rect => {
    return moveLeftTo(target, source.left)
}, 2)
