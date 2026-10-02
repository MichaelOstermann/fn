import type { Rect } from "."
import { dfdl } from "../dfdl"
import { centerX } from "./centerX"
import { merge } from "./merge"

/**
 * # scaleX
 *
 * ```ts
 * function Rect.scaleX(rect: Rect, factor: number): Rect
 * ```
 *
 * Scales the rectangle horizontally by the specified factor while keeping it horizontally centered.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.scaleX({ left: 10, top: 20, width: 100, height: 50 }, 1.5);
 * // { left: -15, top: 20, width: 150, height: 50 }
 * ```
 *
 * ```ts [data-last]
 * pipe({ left: 10, top: 20, width: 100, height: 50 }, Rect.scaleX(1.5));
 * // { left: -15, top: 20, width: 150, height: 50 }
 * ```
 *
 */
export const scaleX = dfdl((rect: Rect, factor: number): Rect => {
    const width = rect.width * Math.max(factor, 0)
    return merge(rect, {
        left: centerX(rect) - width / 2,
        width,
    })
}, 2)
