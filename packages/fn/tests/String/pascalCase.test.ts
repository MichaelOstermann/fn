import { describe, expect, it } from "bun:test"
import { pascalCase } from "../../src/String/pascalCase"

describe("String.pascalCase", () => {
    it("should convert", () => {
        expect(pascalCase("hello world")).toBe("HelloWorld")
        expect(pascalCase("hello-world")).toBe("HelloWorld")
    })
})
