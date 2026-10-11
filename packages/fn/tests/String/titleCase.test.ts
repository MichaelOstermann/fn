import { describe, expect, it } from "bun:test"
import { titleCase } from "../../src/String/titleCase"

describe("String.titleCase", () => {
    it("should convert", () => {
        expect(titleCase("hello world")).toBe("Hello World")
        expect(titleCase("hello-world")).toBe("Hello World")
    })
})
