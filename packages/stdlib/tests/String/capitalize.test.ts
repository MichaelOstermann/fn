import { describe, expect, it } from "bun:test"
import { capitalize } from "../../src/String/capitalize"

describe("String.capitalize", () => {
    it("should make the first character upper case", () => {
        expect(capitalize("hello world")).toBe("Hello world")
        expect(capitalize("")).toBe("")
    })
})
