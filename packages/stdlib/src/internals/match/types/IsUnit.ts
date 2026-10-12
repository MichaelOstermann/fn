import type { IsUnion } from "type-fest"
import type { IsLiteral } from "./IsLiteral"

// A single literal, as opposed to `string`, or a variable that is `"a" | "b"`: only those tell which values are left.
export type IsUnit<T> = IsUnion<T> extends true ? false : IsLiteral<T>
