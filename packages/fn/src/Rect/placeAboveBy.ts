import type { Rect } from "."
import { dfdl } from "../dfdl/dfdl"
import { moveBottomTo } from "./moveBottomTo"

/**
 * # placeAboveBy
 *
 * ```ts
 * function Rect.placeAboveBy(target: Rect, source: Rect, distance: number): Rect
 * ```
 *
 * Positions a `target` rectangle above a `source` rectangle with a specified distance between them. The `target` rectangle is moved so its bottom edge is positioned above the `source` rectangle's top edge by the given distance.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.placeAboveBy(
 *     { left: 50, top: 100, width: 40, height: 30 },
 *     { left: 0, top: 60, width: 100, height: 20 },
 *     10,
 * );
 * // { left: 50, top: 30, width: 40, height: 30 }
 * ```
 *
 * ```ts [data-last]
 * pipe(
 *     { left: 50, top: 100, width: 40, height: 30 },
 *     Rect.placeAboveBy({ left: 0, top: 60, width: 100, height: 20 }, 10),
 * );
 * // { left: 50, top: 30, width: 40, height: 30 }
 * ```
 *
 */
export const placeAboveBy = dfdl((target: Rect, source: Rect, distance: number): Rect => {
    return moveBottomTo(target, source.top - distance)
}, 3)
