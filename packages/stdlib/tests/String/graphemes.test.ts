import { describe, expect, it } from "bun:test"
import { graphemes } from "../../src/String/graphemes"

describe("String.graphemes", () => {
    it("should yield what is perceived as a character", () => {
        expect([...graphemes("hello")]).toEqual(["h", "e", "l", "l", "o"])
        expect([...graphemes("👨‍👩‍👧‍👦")]).toEqual(["👨‍👩‍👧‍👦"])
        expect([...graphemes("café")]).toEqual(["c", "a", "f", "é"])
        expect([...graphemes("")]).toEqual([])
    })

    it("should take a line break of two characters for one", () => {
        expect([...graphemes("a\r\nb")]).toEqual(["a", "\r\n", "b"])
        expect([...graphemes("é\r\nb")]).toEqual(["é", "\r\n", "b"])
    })
})
