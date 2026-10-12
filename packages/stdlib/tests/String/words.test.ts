import { describe, expect, it } from "bun:test"
import { words } from "../../src/String/words"

describe("String.words", () => {
    it("should yield words, without what is in between", () => {
        expect([...words("Hello, world!")]).toEqual(["Hello", "world"])
        expect([...words("  a\tb\nc  ")]).toEqual(["a", "b", "c"])
        expect([...words("state-of-the-art")]).toEqual(["state", "of", "the", "art"])
        expect([...words("")]).toEqual([])
        expect([...words("👍 ... —")]).toEqual([])
    })

    it("should keep what belongs to a word", () => {
        expect([...words("Don't stop, it’s 3.14")]).toEqual(["Don't", "stop", "it’s", "3.14"])
        expect([...words("foo_bar café")]).toEqual(["foo_bar", "café"])
    })

    it("should split text that has no spaces between words", () => {
        expect([...words("日本語のテキスト")]).toEqual(["日本語", "の", "テキスト"])
    })
})
