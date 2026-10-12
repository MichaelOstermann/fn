import { describe, expect, it } from "bun:test"
import { uncapitalize } from "../../src/String/uncapitalize"

describe("String.uncapitalize", () => {
    it("should make the first character lower case", () => {
        expect(uncapitalize("Hello World")).toBe("hello World")
        expect(uncapitalize("")).toBe("")
    })
})
