import type { Primitive } from "type-fest"
import type { IsPlainObject } from "./internals/match/types/IsPlainObject"
import type { ShapeMatcher } from "./internals/match/types/ShapeMatcher"
import type { ShapeVariations } from "./internals/match/types/ShapeVariations"
import type { ValueMatcher } from "./internals/match/types/ValueMatcher"
import { Shape } from "./internals/match/Shape"
import { Value } from "./internals/match/Value"

export interface Match {
    <T extends Primitive | null | undefined>(value: T): ValueMatcher<T>
    shape: <T extends object>(value: IsPlainObject<T> extends true ? T : never) => ShapeMatcher<ShapeVariations<T>>
}

export const match = function (value: any) {
    return new Value(value) as any
} as Match

match.shape = function (value: any) {
    return new Shape(value) as any
}
