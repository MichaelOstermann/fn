import type { Slice } from "string-ts"
import { slice as apply } from "string-ts"

/**
 * `slice(target, start, end)`
 *
 * Extracts a section of `target` string from `start` index to `end` index (exclusive).
 *
 * ```ts
 * slice("hello world", 0, 5); // "hello"
 * slice("hello world", 6, 11); // "world"
 * ```
 *
 * ```ts
 * pipe("hello world", slice(0, 5)); // "hello"
 * pipe("hello world", slice(6, 11)); // "world"
 * ```
 */
export function slice<T extends string, U extends number>(start: U): (target: T) => Slice<T, U>
export function slice<T extends string, U extends number, V extends number>(start: U, end: V): (target: T) => Slice<T, U, V>

export function slice<T extends string, U extends number>(target: T, start: U): Slice<T, U>
export function slice<T extends string, U extends number, V extends number>(target: T, start: U, end: V): Slice<T, U, V>

export function slice(a: any, b?: any, c?: any): any {
    return typeof a === "string"
        ? apply(a, b, c)
        : (d: any) => apply(d, a, b)
}
