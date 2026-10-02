import type { Rect } from "."
import { dfdl } from "../dfdl/dfdl"
import { merge } from "./merge"

/**
 * # cover
 *
 * ```ts
 * function Rect.cover(target: Rect, source: Rect): Rect
 * ```
 *
 * Scales the `target` rectangle up proportionally so it completely covers the `source` rectangle while maintaining its aspect ratio, then centers it within the `source`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.cover(
 *     { left: 10, top: 20, width: 100, height: 50 },
 *     { left: 0, top: 0, width: 150, height: 120 },
 * );
 * // { left: -75, top: -30, width: 300, height: 150 }
 * ```
 *
 * ```ts [data-last]
 * pipe(
 *     { left: 10, top: 20, width: 100, height: 50 },
 *     Rect.cover({ left: 0, top: 0, width: 150, height: 120 }),
 * );
 * // { left: -75, top: -30, width: 300, height: 150 }
 * ```
 *
 */
export const cover = dfdl((target: Rect, source: Rect): Rect => {
    const scale = Math.max(
        source.width / target.width,
        source.height / target.height,
    )

    const width = target.width * scale
    const height = target.height * scale

    return merge(target, {
        height,
        left: source.left + (source.width - width) / 2,
        top: source.top + (source.height - height) / 2,
        width,
    })
}, 2)
