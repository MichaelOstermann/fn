import type { Rect } from "."
import { dfdl } from "../dfdl/dfdl"
import { moveTopTo } from "./moveTopTo"

/**
 * # placeBelowBy
 *
 * ```ts
 * function Rect.placeBelowBy(target: Rect, source: Rect, distance: number): Rect
 * ```
 *
 * Positions a `target` rectangle below a `source` rectangle with a specified distance between them. The `target` rectangle is moved so its top edge is positioned below the `source` rectangle's top edge by the given distance.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.placeBelowBy(
 *     { left: 50, top: 10, width: 40, height: 30 },
 *     { left: 0, top: 20, width: 100, height: 20 },
 *     10,
 * );
 * // { left: 50, top: 30, width: 40, height: 30 }
 * ```
 *
 * ```ts [data-last]
 * pipe(
 *     { left: 50, top: 10, width: 40, height: 30 },
 *     Rect.placeBelowBy({ left: 0, top: 20, width: 100, height: 20 }, 10),
 * );
 * // { left: 50, top: 30, width: 40, height: 30 }
 * ```
 *
 */
export const placeBelowBy = dfdl((target: Rect, source: Rect, distance: number): Rect => {
    return moveTopTo(target, source.top + distance)
}, 3)
