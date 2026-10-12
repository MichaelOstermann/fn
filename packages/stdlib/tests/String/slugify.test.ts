import { describe, expect, it } from "bun:test"
import { slugify } from "../../src/String/slugify"

describe("String.slugify", () => {
    it("should lowercase, and separate with a single dash", () => {
        expect(slugify("Hello World!")).toBe("hello-world")
        expect(slugify("  --Hello__World--  ")).toBe("hello-world")
        expect(slugify("fooBar 123")).toBe("foobar-123")
        expect(slugify("a\tb\nc")).toBe("a-b-c")
    })

    it("should return nothing when there is nothing to keep", () => {
        expect(slugify("")).toBe("")
        expect(slugify("---")).toBe("")
        expect(slugify("日本語")).toBe("")
        expect(slugify("👍")).toBe("")
    })

    it("should remove accents", () => {
        expect(slugify("Déjà Vu")).toBe("deja-vu")
        expect(slugify("Déjà")).toBe("deja")
        expect(slugify("İstanbul")).toBe("istanbul")
        expect(slugify("Ångström")).toBe("angstroem")
    })

    it("should write other alphabets in Latin", () => {
        expect(slugify("Größe")).toBe("groesse")
        expect(slugify("GRÖSSE")).toBe("groesse")
        expect(slugify("я люблю единорогов")).toBe("ya-lyublyu-edinorogov")
        expect(slugify("Я ЛЮБЛЮ")).toBe("ya-lyublyu")
        expect(slugify("Ελληνικά")).toBe("ellinika")
        expect(slugify("Æther Œuvre")).toBe("aether-oeuvre")
    })

    it("should prefer what belongs together", () => {
        expect(slugify("объезд")).toBe("obyezd")
        expect(slugify("1️⃣ a")).toBe("1-a")
    })

    it("should spell out &, and close contractions", () => {
        expect(slugify("Tom & Jerry")).toBe("tom-and-jerry")
        expect(slugify("R&D")).toBe("r-and-d")
        expect(slugify("Conway's Law")).toBe("conways-law")
        expect(slugify("Don’t")).toBe("dont")
        expect(slugify("rock 'n' roll")).toBe("rock-n-roll")
    })

    it("should treat the same character the same with and without something to transliterate", () => {
        expect(slugify("a^b")).toBe("a-b")
        expect(slugify("a^b é")).toBe("a-b-e")
        expect(slugify("a`b é")).toBe("a-b-e")
    })

    it("should never return something that is a path", () => {
        expect(slugify("../etc/passwd")).toBe("etc-passwd")
        expect(slugify("..")).toBe("")
        expect(slugify("a/b\\c")).toBe("a-b-c")
        expect(slugify("a\0b")).toBe("a-b")
        expect(slugify("%2e%2e%2f")).toBe("2e-2e-2f")
    })

    it("should take what is no valid text", () => {
        expect(slugify("a\uD800b")).toBe("a-b")
        expect(slugify("\uDC00")).toBe("")
    })

    it("should only return lowercase letters and digits in groups, and return a slug as it is", () => {
        const pieces = ["a", "B", "s", "t", "1", " ", "-", "_", "'", "’", "&", ".", "/", "\\", "^", "\n", "́", "̸", "️", "⃣", "#", "\uD83C", "\uDD70", "é", "İ", "ß", "ẞ", "я", "Ъ", "е", "λ", "日", "👍", "ǅ", "ﬁ", "K"]
        let seed = 1
        const random = (max: number): number => (seed = (seed * 1103515245 + 12345) & 0x7FFFFFFF) % max

        for (let i = 0; i < 20_000; i++) {
            let input = ""
            for (let length = random(12); length > 0; length--) input += pieces[random(pieces.length)]
            const slug = slugify(input)
            expect(slug).toMatch(/^(?:[a-z\d]+(?:-[a-z\d]+)*)?$/)
            expect(slugify(slug)).toBe(slug)
        }
    })

    it("should take a long string in linear time", () => {
        const start = performance.now()
        expect(slugify("-'".repeat(200_000))).toBe("")
        expect(slugify(`${"a's ".repeat(200_000)}é`)).toHaveLength(600_001)
        expect(performance.now() - start).toBeLessThan(2_000)
    })
})
