import { describe, expect, it } from "bun:test"
import { dedent } from "../../src/String/dedent"

describe("String.dedent", () => {
    it("should remove what all lines are indented by", () => {
        expect(dedent(`
            if (ready) {
                run();
            }
        `)).toBe("if (ready) {\n    run();\n}")
        expect(dedent("\ta\n\t\tb")).toBe("a\n\tb")
    })

    it("should not count blank lines, and keep them", () => {
        expect(dedent("    a\n\n  \n    b")).toBe("a\n\n\nb")
    })

    it("should only remove a first and a last line that are blank", () => {
        expect(dedent("\n\n  a\n\n")).toBe("\na\n")
        expect(dedent("a\n  b")).toBe("a\n  b")
        expect(dedent("")).toBe("")
    })

    it("should take line breaks of two characters", () => {
        expect(dedent("\r\n  a\r\n    b\r\n")).toBe("a\r\n  b")
    })

    it("should be a tag that does not look at values for indentation", () => {
        const value = "x"
        expect(dedent`
            a ${value}
              ${value} b
        `).toBe("a x\n  x b")
        expect(dedent`${value}`).toBe("x")
        expect(dedent`
            ${1}
            ${null}
        `).toBe("1\nnull")
    })

    it("should indent the lines of a value like the line it is placed on", () => {
        const body = "one();\ntwo();"
        expect(dedent`
            function run() {
                ${body}
            }
        `).toBe("function run() {\n    one();\n    two();\n}")
        expect(dedent`
            a: ${body}
        `).toBe("a: one();\ntwo();")
    })
})
