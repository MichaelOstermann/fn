import type { AnyArray } from "./AnyArray"

// The keys of a pattern: all fields of a shape, all positions of a tuple.
export type PatternKeys<P> = P extends AnyArray ? Exclude<keyof P, keyof AnyArray> : keyof P
