import type { Rect } from "."
import { dfdl } from "../dfdl/dfdl"
import { placeRightOfBy } from "./placeRightOfBy"

/**
 * # snapRightOf
 *
 * ```ts
 * function Rect.snapRightOf(target: Rect, source: Rect): Rect
 * ```
 *
 * Positions a `target` rectangle directly to the right of a `source` rectangle with no gap between them. The `target` rectangle's left edge is aligned with the `source` rectangle's right edge.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.snapRightOf(
 *     { left: 10, top: 50, width: 40, height: 30 },
 *     { left: 20, top: 20, width: 100, height: 20 },
 * );
 * // { left: 120, top: 50, width: 40, height: 30 }
 * ```
 *
 * ```ts [data-last]
 * pipe(
 *     { left: 10, top: 50, width: 40, height: 30 },
 *     Rect.snapRightOf({ left: 20, top: 20, width: 100, height: 20 }),
 * );
 * // { left: 120, top: 50, width: 40, height: 30 }
 * ```
 *
 */
export const snapRightOf = dfdl((target: Rect, source: Rect): Rect => {
    return placeRightOfBy(target, source, 0)
}, 2)
