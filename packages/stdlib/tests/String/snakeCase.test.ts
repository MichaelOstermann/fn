import { describe, expect, it } from "bun:test"
import { snakeCase } from "../../src/String/snakeCase"

describe("String.snakeCase", () => {
    it("should convert", () => {
        expect(snakeCase("hello world")).toBe("hello_world")
        expect(snakeCase("helloWorld")).toBe("hello_world")
    })
})
