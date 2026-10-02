import type { Rect } from "."
import { dfdl } from "../dfdl"
import { centerX } from "./centerX"
import { setCenterX } from "./setCenterX"

/**
 * # alignCenterX
 *
 * ```ts
 * function Rect.alignCenterX(target: Rect, source: Rect): Rect
 * ```
 *
 * Aligns the horizontal center of the `target` rectangle to the horizontal center of the `source` rectangle by moving the `target` rectangle horizontally only.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.alignCenterX(
 *     { left: 10, top: 10, width: 100, height: 50 },
 *     { left: 50, top: 30, width: 80, height: 40 },
 * );
 * // { left: 50, top: 10, width: 100, height: 50 }
 * ```
 *
 * ```ts [data-last]
 * pipe(
 *     { left: 10, top: 10, width: 100, height: 50 },
 *     Rect.alignCenterX({ left: 50, top: 30, width: 80, height: 40 }),
 * );
 * // { left: 50, top: 10, width: 100, height: 50 }
 * ```
 *
 */
export const alignCenterX = dfdl((target: Rect, source: Rect): Rect => {
    return setCenterX(target, centerX(source))
}, 2)
