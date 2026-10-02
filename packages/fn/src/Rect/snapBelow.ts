import type { Rect } from "."
import { dfdl } from "../dfdl"
import { placeBelowBy } from "./placeBelowBy"

/**
 * # snapBelow
 *
 * ```ts
 * function Rect.snapBelow(target: Rect, source: Rect): Rect
 * ```
 *
 * Positions a `target` rectangle directly below a `source` rectangle with no gap between them. The `target` rectangle's top edge is aligned with the `source` rectangle's top edge (same as placeBelowBy with distance 0).
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.snapBelow(
 *     { left: 50, top: 10, width: 40, height: 30 },
 *     { left: 0, top: 20, width: 100, height: 20 },
 * );
 * // { left: 50, top: 20, width: 40, height: 30 }
 * ```
 *
 * ```ts [data-last]
 * pipe(
 *     { left: 50, top: 10, width: 40, height: 30 },
 *     Rect.snapBelow({ left: 0, top: 20, width: 100, height: 20 }),
 * );
 * // { left: 50, top: 20, width: 40, height: 30 }
 * ```
 *
 */
export const snapBelow = dfdl((target: Rect, source: Rect): Rect => {
    return placeBelowBy(target, source, 0)
}, 2)
