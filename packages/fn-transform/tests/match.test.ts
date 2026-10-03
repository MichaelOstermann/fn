import { describe, expect, it } from "bun:test"
import { match } from "../../fn/src/match"
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

    // Function bodies that are run as they are, and compiled, to see that both agree.
    const bodies: [name: string, body: string][] = [
        ["chains inside of other expressions", `const value = 1; return match(value).case(1, 2).or(3) + 4;`],
        ["shapes inside of other expressions", `const value = { a: 1 }; return match.shape(value).case({ a: 1 }, 2).or(3) + 4;`],
        ["callbacks returning the parameter as a shorthand property", `const value = 1; return match(value).onCase(1, v => ({ v })).or(null);`],
        ["callbacks using the parameter as a property name", `const value = "a"; return match(value).onCase("a", v => ({ v: 1, w: { v }.v, x: [v].length, y: ({ value: 2 }).value })).or(null);`],
        ["callbacks assigning to the parameter", `const value = 1; return match(value).onCase(1, v => ++v).or(0);`],
        ["callbacks reassigning the parameter", `const value = 1; return match(value).onCase(1, v => (v = v + 5, v)).or(0);`],
        ["callbacks destructuring into the parameter", `const value = 1; return match(value).onCase(1, v => ([v] = [7], v)).or(0);`],
        ["callbacks with something inside that has the name of the value", `const value = 1; return match(value).onCase(1, v => ((value) => v)(9)).or(0);`],
        ["callbacks shadowing the parameter", `const value = 1; return match(value).onCase(1, v => [v, (v => v + 1)(10)]).or(0);`],
        ["callbacks with more parameters", `const value = 1; return match(value).onCase(1, (v, w) => [v, w]).or(0);`],
        ["callbacks with a default", `const value = 1; return match(value).orElse((v = 5) => v);`],
        ["callbacks that are functions", `const value = 1; return match(value).onCase(1, function (v) { return [v, arguments.length, this === undefined]; }).or(0);`],
        ["callbacks without parameters", `const value = 1; return [match(value).onCase(1, () => 2).or(0), match(value).onCase(1, () => {}).or(0), match(value).onCase(1, () => { return }).or(0), match(value).onCase(1, () => { return 3 }).or(0)];`],
        ["callbacks with several statements", `const value = 2; return match(value).onCase(2, (v) => { const w = v * 2; return w + 1 }).or(0);`],
        ["conditions returning from a block", `const value = 7; return match(value).cond((v) => { return v > 5 }, "big").or("small");`],
        ["something else that is called match", `function run(match) { const value = 1; return match(value).case(1, 2).or(3); } return run(() => ({ case: () => ({ or: () => 99 }) }));`],
        ["something else that is called match, declared later", `function run() { return match(1).case(1, 2).or(3); function match() { return { case: () => ({ or: () => 99 }) } } } return run();`],
        ["a chain that assigns to the value", `let value = 1; return match(value).onCond(v => { value = 2; return false; }, () => 0).case(1, 3).or(4);`],
        ["a chain that updates the value", `let value = 1; return match(value).cond(() => value++ > 5, 0).case(1, 3).or(4);`],
        ["empty shapes", `const value = { type: "a" }; return match.shape(value).case({}, 1).or(2);`],
        ["shapes with expressions as values", `const value = { type: "a" }; const flag = false; return match.shape(value).case({ type: flag ? "a" : "b" }, 1).or(2);`],
        ["shapes with computed and quoted keys", `const value = { "a-b": 1, c: 2 }; const key = "c"; return match.shape(value).case({ "a-b": 1, [key]: 2 }, "yes").or("no");`],
        ["nested chains", `const value = 1; const other = 2; return match(value).onCase(1, () => match(other).case(2, "both").or("first")).or("none");`],
    ]

    for (const [name, body] of bodies) {
        it(`should compile ${name}`, () => {
            const code = `import { match } from "@monstermann/fn";\n${body}`
            const compiled = transformMatches(code, "source.ts", "@monstermann/fn")!.ms.toString().replace(/^import .*\n/, "")
            // eslint-disable-next-line no-new-func
            const run = (source: string): unknown => new Function("match", `"use strict";${source}`)(match)
            expect(run(compiled)).toEqual(run(body))
        })
    }

    it("should keep the promise of async callbacks", async () => {
        const body = `const value = 1; return match(value).onCase(1, async v => v + 1).or(null);`
        const compiled = transformMatches(`import { match } from "@monstermann/fn";\n${body}`, "source.ts", "@monstermann/fn")!.ms.toString().replace(/^import .*\n/, "")
        // eslint-disable-next-line no-new-func
        const result = new Function("match", compiled)(match)
        expect(result).toBeInstanceOf(Promise)
        expect(await result).toBe(2)
    })

    it("should only evaluate the result of the branch that matches", () => {
        // The one difference to running a chain as it is, where every argument is evaluated.
        const body = `const value = 1; let count = 0; const result = match(value).case(1, ++count).or(++count); return [result, count];`
        const compiled = transformMatches(`import { match } from "@monstermann/fn";\n${body}`, "source.ts", "@monstermann/fn")!.ms.toString().replace(/^import .*\n/, "")
        // eslint-disable-next-line no-new-func
        expect(new Function("match", compiled)(match)).toEqual([1, 1])
        // eslint-disable-next-line no-new-func
        expect(new Function("match", body)(match)).toEqual([1, 2])
    })

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
