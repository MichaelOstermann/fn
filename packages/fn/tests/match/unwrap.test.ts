import { describe, expect, test } from "bun:test"
import { match } from "../../src/match"

describe("unwrap", () => {
    test("should return exhaustive match", () => {
        const result = match(0).case(0, true).unwrap()
        expect(result).toBe(true)
    })

    test("should throw on non-exhaustive match", () => {
        // @ts-expect-error test case.
        expect(() => match(0).unwrap())
            .toThrow("Pattern matching error: no pattern matches value 0")
    })
})
