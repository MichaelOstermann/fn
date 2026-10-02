import type { Rect } from "."
import { dfdl } from "../dfdl"
import { fromDOMRect } from "./fromDOMRect"

/**
 * # fromElement
 *
 * ```ts
 * function Rect.fromElement(element: HTMLElement): Rect
 * ```
 *
 * Creates a rectangle from an HTML element's bounding client rectangle.
 *
 * ## Example
 *
 * ```ts [data-first]
 * const div = document.querySelector("div");
 * Rect.fromElement(div);
 * // { left: 10, top: 20, width: 100, height: 50 }
 * ```
 *
 * ```ts [data-last]
 * const div = document.querySelector("div");
 * pipe(div, Rect.fromElement());
 * // { left: 10, top: 20, width: 100, height: 50 }
 * ```
 *
 */
export const fromElement = dfdl((element: HTMLElement): Rect => {
    return fromDOMRect(element.getBoundingClientRect())
}, 1)
