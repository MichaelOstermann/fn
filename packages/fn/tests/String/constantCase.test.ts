import { describe, expect, it } from "bun:test"
import { constantCase } from "../../src/String/constantCase"

describe("String.constantCase", () => {
    it("should convert", () => {
        expect(constantCase("hello world")).toBe("HELLO_WORLD")
        expect(constantCase("helloWorld")).toBe("HELLO_WORLD")
    })
})
