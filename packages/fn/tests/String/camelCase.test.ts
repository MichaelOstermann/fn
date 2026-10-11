import { describe, expect, it } from "bun:test"
import { camelCase } from "../../src/String/camelCase"

describe("String.camelCase", () => {
    it("should convert", () => {
        expect(camelCase("hello world")).toBe("helloWorld")
        expect(camelCase("hello-world")).toBe("helloWorld")
    })
})
