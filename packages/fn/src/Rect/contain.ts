import type { Rect } from "."
import { dfdl } from "../dfdl"
import { merge } from "./merge"

/**
 * # contain
 *
 * ```ts
 * function Rect.contain(target: Rect, source: Rect): Rect
 * ```
 *
 * Scales the `target` rectangle down proportionally so it fits entirely within the `source` rectangle while maintaining its aspect ratio, then centers it within the `source`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.contain(
 *     { left: 10, top: 20, width: 200, height: 100 },
 *     { left: 0, top: 0, width: 150, height: 120 },
 * );
 * // { left: 37.5, top: 30, width: 75, height: 60 }
 * ```
 *
 * ```ts [data-last]
 * pipe(
 *     { left: 10, top: 20, width: 200, height: 100 },
 *     Rect.contain({ left: 0, top: 0, width: 150, height: 120 }),
 * );
 * // { left: 37.5, top: 30, width: 75, height: 60 }
 * ```
 *
 */
export const contain = dfdl((target: Rect, source: Rect): Rect => {
    const scale = Math.min(
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
