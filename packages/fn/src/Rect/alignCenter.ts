import type { Rect } from "."
import { dfdl } from "../dfdl/dfdl"
import { centerX } from "./centerX"
import { centerY } from "./centerY"
import { setCenter } from "./setCenter"

/**
 * # alignCenter
 *
 * ```ts
 * function Rect.alignCenter(target: Rect, source: Rect): Rect
 * ```
 *
 * Aligns the center point of the `target` rectangle to the center point of the `source` rectangle by moving the `target` rectangle both horizontally and vertically.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.alignCenter(
 *     { left: 10, top: 10, width: 100, height: 50 },
 *     { left: 50, top: 30, width: 80, height: 40 },
 * );
 * // { left: 50, top: 40, width: 100, height: 50 }
 * ```
 *
 * ```ts [data-last]
 * pipe(
 *     { left: 10, top: 10, width: 100, height: 50 },
 *     Rect.alignCenter({ left: 50, top: 30, width: 80, height: 40 }),
 * );
 * // { left: 50, top: 40, width: 100, height: 50 }
 * ```
 *
 */
export const alignCenter = dfdl((target: Rect, source: Rect): Rect => {
    return setCenter(target, centerX(source), centerY(source))
}, 2)
