import { describe, expect, it } from "bun:test"
import { escapeHTML } from "../../src/String/escapeHTML"

describe("String.escapeHTML", () => {
    it("should replace what means something in HTML", () => {
        expect(escapeHTML("<b>Tom & Jerry</b>")).toBe("&lt;b&gt;Tom &amp; Jerry&lt;/b&gt;")
        expect(escapeHTML(`"double" 'single'`)).toBe("&quot;double&quot; &#39;single&#39;")
        expect(escapeHTML("&amp;")).toBe("&amp;amp;")
    })

    it("should leave everything else as it is", () => {
        expect(escapeHTML("")).toBe("")
        expect(escapeHTML("héllo wörld 👍 `/=")).toBe("héllo wörld 👍 `/=")
    })
})
