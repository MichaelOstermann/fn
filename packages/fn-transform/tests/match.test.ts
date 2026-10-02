import { describe, expect, it } from "bun:test"
import { match } from "../../fn/src/match/match"
import { transformMatches } from "../src/match"

type Scope = { fallback: string, value: any }

/** Runs an expression as it is, and compiled, to see that both agree. */
function evaluate(expression: string, scope: Scope): { compiled: unknown, isCompiled: boolean, original: unknown } {
    const code = `import { match } from "@monstermann/fn";\nexport const result = ${expression};`
    const result = transformMatches(code, "source.ts", "@monstermann/fn")!
    const compiled = result.ms.toString()
    const run = (source: string): unknown => {
        const body = source.replace(/^import .*\n/, "").replace("export const result =", "return")
        // eslint-disable-next-line no-new-func
        return new Function("match", "value", "fallback", body)(match, scope.value, scope.fallback)
    }
    return { compiled: run(compiled), isCompiled: result.isUnused, original: run(code) }
}

const cases: [name: string, expression: string, scopes: Scope["value"][]][] = [
    ["case", `match(value).case(1, "one").case(2, "two").or(fallback)`, [1, 2, 3]],
    ["case with orThrow", `match(value).case(1, "one").case(2, "two").orThrow()`, [1, 2]],
    ["onCase", `match(value).onCase(1, v => v + 1).onCase(2, (v) => { return v * 10 }).or(fallback)`, [1, 2, 3]],
    ["cond", `match(value).cond(v => v > 10, "big").cond(v => v > 5, "medium").or(fallback)`, [20, 7, 1]],
    ["onCond", `match(value).onCond(v => v > 10, v => v - 10).orElse(v => v * 2)`, [20, 3]],
    ["orElse", `match(value).case(1, "one").orElse(v => String(v))`, [1, 5]],
    ["expressions as value", `match(value + 1).case(2, "two").or(fallback)`, [1, 2]],
    ["shape", `match.shape(value).case({ type: "a" }, "A").case({ type: "b", id: 1 }, "B1").or(fallback)`, [{ type: "a" }, { id: 1, type: "b" }, { id: 2, type: "b" }]],
    ["shape with onCase", `match.shape(value).onCase({ type: "a" }, v => v.id).orElse(v => v.type)`, [{ id: 7, type: "a" }, { id: 1, type: "b" }]],
]

describe("transformMatches", () => {
    for (const [name, expression, values] of cases) {
        it(`should compile ${name}`, () => {
            for (const value of values) {
                const { compiled, isCompiled, original } = evaluate(expression, { fallback: "fallback", value })
                expect(isCompiled).toBe(true)
                expect(compiled).toEqual(original)
            }
        })
    }

    it("should throw when nothing matches orThrow", () => {
        expect(() => evaluate(`match(value).case(1, "one").orThrow()`, { fallback: "", value: 2 })).toThrow("Pattern matching error")
    })

    it("should follow renamed imports and ignore other functions called match", () => {
        const renamed = transformMatches(`import { match as m } from "@monstermann/fn";\nm(a).case(1, 2).or(3);\nmatch(a).case(1, 2).or(3);`, "source.ts", "@monstermann/fn")!
        expect(renamed.ms.toString()).toContain(`(a === (1)) ? (2)`)
        expect(renamed.ms.toString()).toContain(`match(a).case(1, 2).or(3);`)
        expect(transformMatches(`import { match } from "other";\nmatch(a).case(1, 2).or(3);`, "source.ts", "@monstermann/fn")).toBe(undefined)
        expect(transformMatches(`"abc".match(a).case(1, 2).or(3);`, "source.ts", "@monstermann/fn")).toBe(undefined)
    })

    it("should report when match is still used", () => {
        const run = (code: string): boolean => transformMatches(`import { match } from "@monstermann/fn";\n${code}`, "source.ts", "@monstermann/fn")!.isUnused
        expect(run(`match(a).case(1, 2).or(3);`)).toBe(true)
        expect(run(`match(a).case(1, 2).or(3); const m = match;`)).toBe(false)
        expect(run(`match(a).case(1, 2);`)).toBe(false)
        expect(run(`match(a).onCase(1, () => match(b).case(1, 2).or(3)).or(3);`)).toBe(false)
    })
})
