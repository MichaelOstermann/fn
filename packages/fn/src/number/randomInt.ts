import { dual } from "@monstermann/dfdl"

/**
 * `randomInt(start, end)`
 *
 * Returns a random integer within the range between `start` and `end` (inclusive). The order of `start` and `end` does not matter.
 *
 * ```ts
 * randomInt(1, 10); // random integer between 1 and 10
 * randomInt(10, 1); // random integer between 1 and 10
 * randomInt(0, 5); // random integer between 0 and 5
 * ```
 *
 * ```ts
 * pipe(1, randomInt(10)); // random integer between 1 and 10
 * pipe(10, randomInt(1)); // random integer between 1 and 10
 * pipe(0, randomInt(5)); // random integer between 0 and 5
 * ```
 */
export const randomInt: {
    (end: number): (start: number) => number
    (start: number, end: number): number
} = dual(2, (start: number, end: number): number => {
    const a = Math.ceil(Math.min(start, end))
    const b = Math.floor(Math.max(start, end))
    return Math.floor(Math.random() * (b - a + 1) + a)
})
