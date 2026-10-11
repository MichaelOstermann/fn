import { describe, expect, it } from "bun:test"
import { kebabCase } from "../../src/String/kebabCase"

describe("String.kebabCase", () => {
    it("should convert", () => {
        expect(kebabCase("hello world")).toBe("hello-world")
        expect(kebabCase("helloWorld")).toBe("hello-world")
    })
})
