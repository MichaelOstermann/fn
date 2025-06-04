import type { IsLiteral as IsNonNullableLiteral } from "type-fest"

export type NonNil<T> = Exclude<T, null | undefined>

export type IsLiteral<T> = IsNonNullableLiteral<T> extends true
    ? true
    : T extends null | undefined
        ? true
        : false
