import type { Rect } from "."
import { dfdl } from "../dfdl/dfdl"
import { centerX } from "./centerX"
import { centerY } from "./centerY"
import { intersects } from "./intersects"

type Point = {
    readonly x: number
    readonly y: number
}

type LineIntersection = {
    readonly point?: Point
    readonly type: "INTERSECTION" | "COLINEAR" | "PARALLEL" | "NONE"
}

/**
 * # distance
 *
 * ```ts
 * function Rect.distance(a: Rect, b: Rect): number
 * ```
 *
 * Calculates the shortest distance between two rectangles. Returns 0 if the rectangles intersect.
 *
 * ## Example
 *
 * ```ts [data-first]
 * Rect.distance(
 *     { left: 0, top: 0, width: 50, height: 50 },
 *     { left: 100, top: 0, width: 50, height: 50 },
 * );
 * // 50
 * ```
 *
 * ```ts [data-last]
 * pipe(
 *     { left: 0, top: 0, width: 50, height: 50 },
 *     Rect.distance({ left: 100, top: 0, width: 50, height: 50 }),
 * );
 * // 50
 * ```
 *
 */
export const distance = dfdl((a: Rect, b: Rect): number => {
    if (intersects(a, b)) return 0

    const centerLine: Rect = {
        height: centerY(b) - centerY(a),
        left: centerX(a),
        top: centerY(a),
        width: centerX(b) - centerX(a),
    }

    const start = intersectRectWithLine(a, centerLine)!
    const end = intersectRectWithLine(b, centerLine)!

    const length = Math.hypot(end.x - start.x, -(end.y - start.y))
    return length
})

function intersectRectWithLine(rect: Rect, line: Rect): Point | undefined {
    const right = rect.left + rect.width
    const bottom = rect.top + rect.height
    // Top edge
    return intersectLines(line, { height: 0, left: rect.left, top: rect.top, width: rect.width }).point
        // Bottom edge
        ?? intersectLines(line, { height: 0, left: rect.left, top: bottom, width: rect.width }).point
        // Left edge
        ?? intersectLines(line, { height: rect.height, left: rect.left, top: rect.top, width: 0 }).point
        // Right edge
        ?? intersectLines(line, { height: rect.height, left: right, top: rect.top, width: 0 }).point
}

function intersectLines(
    line1: Rect,
    line2: Rect,
): LineIntersection {
    const x1 = line1.left
    const y1 = line1.top
    const x2 = line1.left + line1.width
    const y2 = line1.top + line1.height
    const x3 = line2.left
    const y3 = line2.top
    const x4 = line2.left + line2.width
    const y4 = line2.top + line2.height

    const denomiator = ((y4 - y3) * (x2 - x1)) - ((x4 - x3) * (y2 - y1))
    const numeratorA = ((x4 - x3) * (y1 - y3)) - ((y4 - y3) * (x1 - x3))
    const numeratorB = ((x2 - x1) * (y1 - y3)) - ((y2 - y1) * (x1 - x3))

    if (denomiator === 0 && numeratorA === 0 && numeratorB === 0) {
        return { type: "COLINEAR" }
    }

    if (denomiator === 0) {
        return { type: "PARALLEL" }
    }

    const uA = numeratorA / denomiator
    const uB = numeratorB / denomiator

    if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
        return {
            type: "INTERSECTION",
            point: {
                x: x1 + (uA * (x2 - x1)),
                y: y1 + (uA * (y2 - y1)),
            },
        }
    }

    return { type: "NONE" }
}
