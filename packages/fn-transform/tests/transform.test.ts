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
            import { Arr, Rect } from "@monstermann/fn";
            Arr.mapEach([1], x => x);
            Rect.area(rect);
        `)).toBe(dedent(`
            import { mapEach as _mapEach } from "@monstermann/fn/Arr/mapEach.mjs";
            import { area as _area } from "@monstermann/fn/Rect/area.mjs";
            _mapEach([1], x => x);
            _area(rect);
        `))
    })

    it("should import everything else from the file it lives in", () => {
        expect(run(`
            import { pipe, cloneArray as clone, Arr } from "@monstermann/fn";
            pipe(clone(a), Arr.at(0));
        `)).toBe(dedent(`
            import { pipe } from "@monstermann/fn/dfdl/pipe.mjs";
            import { cloneArray as clone } from "@monstermann/fn/remmi/cloneArray.mjs";
            import { at as _at } from "@monstermann/fn/Arr/at.mjs";
            pipe(clone(a), _at(0));
        `))
    })

    it("should import namespaces that are used as a value from their own file", () => {
        expect(run(`
            import { Arr } from "@monstermann/fn";
            call(Arr);
        `)).toBe(dedent(`
            import { Arr } from "@monstermann/fn/Arr/index.mjs";
            call(Arr);
        `))
    })

    it("should keep types", () => {
        expect(run(`
            import { Rect, type Dsp, pipe } from "@monstermann/fn";
            const a: Rect = Rect.origin;
            let b: Dsp;
        `)).toBe(dedent(`
            import type { Dsp } from "@monstermann/fn";
            import { pipe } from "@monstermann/fn/dfdl/pipe.mjs";
            import { origin as _origin } from "@monstermann/fn/Rect/origin.mjs";
            import type { Rect } from "@monstermann/fn";
            const a: Rect = _origin;
            let b: Dsp;
        `))
    })

    it("should compile match expressions and remove the import", () => {
        expect(run(`
            import { match } from "@monstermann/fn";
            const a = match(value).case(1, "one").or("other");
        `)).toBe(dedent(`

            const a = (value === (1)) ? ("one")
            : ("other");
        `))
    })

    it("should keep the import of match when it is still used", () => {
        expect(run(`
            import { match } from "@monstermann/fn";
            const a = match(value).case(1, "one").or("other");
            const b = match;
        `)).toStartWith(`import { match } from "@monstermann/fn/match/match.mjs";`)
    })

    it("should leave unknown exports, other packages and namespace imports alone", () => {
        expect(run(`
            import { unknown } from "@monstermann/fn";
            import { Arr } from "other";
            import * as Fn from "@monstermann/fn";
            Arr.mapEach();
            Fn.Arr.mapEach();
        `)).toBe(undefined)
        expect(run(`import { Arr } from "@monstermann/fnord";\nArr.mapEach();`)).toBe(undefined)
        expect(run(`const a = 1`)).toBe(undefined)
    })

    it("should create sourcemaps", () => {
        const result = transform(`import { match, Arr, pipe } from "@monstermann/fn";\nmatch(a).case(1, Arr.at(b, 0)).or(pipe(c));`, "source.ts")
        expect(result!.map.sources).toEqual(["source.ts"])
        expect(result!.map.mappings).toBeTruthy()
        expect(result!.map.sourcesContent![0]).toContain(`match(a).case(1`)
    })
})
