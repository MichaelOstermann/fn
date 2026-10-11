import { describe, expect, it } from "bun:test"
import { transform } from "../src"

function run(code: string): string | undefined {
    return transform(dedent(code), "source.ts")?.code
}

function dedent(code: string): string {
    const lines = code.split("\n").filter((line, i, lines) => line.trim() || (i > 0 && i < lines.length - 1))
    const indent = Math.min(...lines.filter(line => line.trim()).map(line => line.match(/^ */)![0].length))
    return lines.map(line => line.slice(indent)).join("\n")
}

describe("transform", () => {
    it("should import the members of namespaces directly", () => {
        expect(run(`
            import { Rect } from "@monstermann/fn";
            Rect.origin;
            Rect.area(rect);
        `)).toBe(dedent(`
            import { origin as _origin } from "@monstermann/fn/Rect/origin.mjs";
            import { area as _area } from "@monstermann/fn/Rect/area.mjs";
            _origin;
            _area(rect);
        `))
    })

    it("should import what is used of globals directly", () => {
        expect(run(`
            import "@monstermann/fn/globals";
            Array.removeAll(a, [1]);
            Function.debounce(b, { wait: 1 });
        `)).toBe(dedent(`
            import { removeAll as _removeAll } from "@monstermann/fn/Array/removeAll.mjs";import { debounce as _debounce } from "@monstermann/fn/Function/debounce.mjs";
            _removeAll(a, [1]);
            _debounce(b, { wait: 1 });
        `))
        expect(run(`Array.from(a);`)).toBe(undefined)
    })

    it("should work without importing anything", () => {
        expect(run(`
            import "@monstermann/fn/globals";
            export const a = pipe(b, b => Array.map(b, v => match(v).case(1, Rect.origin).unwrapOr(c)));
            export const d = Ok(match);
        `)).toBe(dedent(`
            import { map as _map } from "@monstermann/fn/Array/map.mjs";import { origin as _origin } from "@monstermann/fn/Rect/origin.mjs";import { Ok } from "@monstermann/fn/Result.mjs";import { match } from "@monstermann/fn/match.mjs";
            export const a = _map(b, v => ((v === (1)) ? (_origin)
            : (c)));
            export const d = Ok(match);
        `))
    })

    it("should keep every line where it is", () => {
        expect(run(`
            import "@monstermann/fn/globals"
            match(a).case(1, 2).unwrapOr(3)
            b()
        `)!.split("\n").at(-1)).toBe("b()")
        expect(run(`
            import { _, match } from "@monstermann/fn"
            match(a).shape([_, 1], 2).unwrapOr(3)
            b()
        `)!.split("\n").length).toBe(4)
    })

    it("should replace globals next to everything else", () => {
        expect(run(`
            import { match, pipe, Rect } from "@monstermann/fn";
            pipe(a, a => Array.map(a, v => match(v).case(1, Rect.origin).unwrapOr(b)));
        `)).toBe(`\n${dedent(`
            import { map as _map } from "@monstermann/fn/Array/map.mjs";import { origin as _origin } from "@monstermann/fn/Rect/origin.mjs";
            _map(a, v => ((v === (1)) ? (_origin)
            : (b)));
        `)}`)
    })

    it("should import everything else from the file it lives in", () => {
        expect(run(`
            import { pipe, match as m, Rect } from "@monstermann/fn";
            call(pipe, m, Rect.area);
        `)).toBe(dedent(`
            import { pipe } from "@monstermann/fn/pipe.mjs";
            import { match as m } from "@monstermann/fn/match.mjs";
            import { area as _area } from "@monstermann/fn/Rect/area.mjs";
            call(pipe, m, _area);
        `))
    })

    it("should import namespaces that are used as a value from their own file", () => {
        expect(run(`
            import { Rect } from "@monstermann/fn";
            call(Rect);
        `)).toBe(dedent(`
            import { Rect } from "@monstermann/fn/Rect/index.mjs";
            call(Rect);
        `))
    })

    it("should keep types", () => {
        expect(run(`
            import { Rect, type Result, pipe } from "@monstermann/fn";
            const a: Rect = Rect.origin;
            let b: Result<number, string>;
        `)).toBe(dedent(`
            import type { Result } from "@monstermann/fn";
            import { pipe } from "@monstermann/fn/pipe.mjs";
            import { origin as _origin } from "@monstermann/fn/Rect/origin.mjs";
            import type { Rect } from "@monstermann/fn";
            const a: Rect = _origin;
            let b: Result<number, string>;
        `))
    })

    it("should compile match expressions and remove the import", () => {
        expect(run(`
            import { match } from "@monstermann/fn";
            const a = (value) => match(value).case(1, "one").unwrapOr("other");
        `)).toBe(dedent(`

            const a = (value) => ((value === (1)) ? ("one")
            : ("other"));
        `))
    })

    it("should compile chains inside of the callbacks of other chains", () => {
        expect(run(`
            import { _, match } from "@monstermann/fn";
            const a = (value, other, pattern) => match(value).onCase(1, v => match(other).case(v, "same").shape(pattern, [_, v], "alike").unwrap()).unwrapOrElse(() => match(other).case(2, "other").unwrapOr("none"));
        `)).toBe(dedent(`

            import { matches as matches0 } from "@monstermann/fn/internals/match/matches.mjs";
            import { throwUnmatched as throwUnmatched0 } from "@monstermann/fn/internals/match/throwUnmatched.mjs";
            const a = (value, other, pattern) => ((value === (1)) ? (((other === (value)) ? ("same")
            : (matches0(other, pattern) || (Array.isArray(other) && other.length === 2 && other[1] === (value))) ? ("alike")
            : throwUnmatched0(other)))
            : (((other === (2)) ? ("other")
            : ("none"))));
        `))
    })

    it("should keep the import of a wildcard that is still used", () => {
        expect(run(`
            import { _, match } from "@monstermann/fn";
            const a = (value) => match(value).shape([_], "one").unwrapOr(_);
        `)).toBe(dedent(`
            import { _ } from "@monstermann/fn/_.mjs";
            const a = (value) => ((Array.isArray(value) && value.length === 1) ? ("one")
            : (_));
        `))
    })

    it("should keep the import of match when it is still used", () => {
        expect(run(`
            import { match } from "@monstermann/fn";
            const a = match(value).case(1, "one").unwrapOr("other");
            const b = match;
        `)).toStartWith(`import { match } from "@monstermann/fn/match.mjs";`)
    })

    it("should leave unknown exports, other packages and namespace imports alone", () => {
        expect(run(`
            import { unknown } from "@monstermann/fn";
            import { Rect } from "other";
            import * as Fn from "@monstermann/fn";
            Rect.area();
            Fn.Rect.area();
        `)).toBe(undefined)
        expect(run(`import { Rect } from "@monstermann/fnord";\nRect.area();`)).toBe(undefined)
        expect(run(`const a = 1`)).toBe(undefined)
    })

    it("should create sourcemaps", () => {
        const result = transform(`import { match, Rect, pipe } from "@monstermann/fn";\nmatch(a).case(1, Rect.area(b)).unwrapOr(pipe(Array.map(c, d)));`, "source.ts")
        expect(result!.map.sources).toEqual(["source.ts"])
        expect(result!.map.mappings).toBeTruthy()
        expect(result!.map.sourcesContent![0]).toContain(`match(a).case(1`)
    })
})
