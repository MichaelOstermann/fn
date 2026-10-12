/**
 * # range
 *
 * ```ts
 * function Number.range(end: number): Generator<number>
 * function Number.range(start: number, end: number, step?: number): Generator<number>
 * ```
 *
 * Yields the numbers from `start`, which is `0` when left out, up to `end`, which is not one of them, `step` apart.
 *
 * `step` is `1` by default, or `-1` when `end` is less than `start`. A `step` that leads away from `end` yields nothing.
 *
 * ## Example
 *
 * ```ts
 * [...Number.range(3)]; // [0, 1, 2]
 * [...Number.range(1, 4)]; // [1, 2, 3]
 * [...Number.range(0, 10, 5)]; // [0, 5]
 * [...Number.range(3, 0)]; // [3, 2, 1]
 * [...Number.range(0, 1, 0.25)]; // [0, 0.25, 0.5, 0.75]
 *
 * for (const index of Number.range(3)) {
 *     console.log(index); // 0, 1, 2
 * }
 * ```
 *
 */
export function range(end: number): Generator<number>
export function range(start: number, end: number, step?: number): Generator<number>
export function* range(a: number, b?: number, step?: number): Generator<number> {
    const start = b === undefined ? 0 : a
    const end = b === undefined ? a : b
    step ??= end < start ? -1 : 1

    if (Number.isNaN(start) || Number.isNaN(end) || Number.isNaN(step)) throw new RangeError("Number.range: NaN is no number to count with.")
    if (!Number.isFinite(start) || !Number.isFinite(step)) throw new RangeError("Number.range: start and step have to be finite.")
    if (step === 0 && start !== end) throw new RangeError("Number.range: a step of 0 never reaches the end.")

    // Multiplied instead of added up, which would add up the rounding errors of fractions as well.
    if (step > 0) {
        for (let i = 0, value = start; value < end; value = start + step * ++i) yield value
    }
    else {
        for (let i = 0, value = start; value > end; value = start + step * ++i) yield value
    }
}
