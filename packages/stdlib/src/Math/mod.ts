/**
 * # mod
 *
 * ```ts
 * Math.mod(value, divisor)
 * ```
 *
 * Returns what is left of `value` after dividing by `divisor`, with the sign of `divisor`: unlike `%`, something negative wraps around instead of staying negative.
 *
 * ## Example
 *
 * ```ts
 * Math.mod(7, 5); // 2
 * Math.mod(-1, 5); // 4, where -1 % 5 is -1
 * Math.mod(index - 1, items.length); // the last one before the first
 * Math.mod(1, -5); // -4
 * ```
 */
export function mod(value: number, divisor: number): number {
    const result = value % divisor
    // Nothing left stays nothing, instead of becoming the divisor.
    // Adding 0 turns -0 into 0.
    return result !== 0 && (result < 0) !== (divisor < 0) ? result + divisor : result + 0
}
