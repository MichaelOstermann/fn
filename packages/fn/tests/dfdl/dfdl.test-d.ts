import { describe, expectTypeOf, it } from "bun:test"
import { dfdl } from "../../src/dfdl/index"

describe("dfdl", () => {
    it("should infer data-first style", () => {
        const example = dfdl((a: number, b: string) => [a, b])
        expectTypeOf(example(1, "1")).toEqualTypeOf<(number | string)[]>()
    })

    it("should infer data-last style", () => {
        const example = dfdl((a: number, b: string) => [a, b])
        expectTypeOf(example("1")).toEqualTypeOf<(value: number) => (number | string)[]>()
        expectTypeOf(example("1")(1)).toEqualTypeOf<(number | string)[]>()
    })

    it("should error when invalid arity was used", () => {
        dfdl(
            (a: number, b: string) => [a, b],
            // @ts-expect-error invalid
            1,
        )
    })
})
