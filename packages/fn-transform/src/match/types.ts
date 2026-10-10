import type MagicString from "magic-string"
import type { Node } from "oxc-parser"

/** What compiled code refers to other than what is already there, by the names it has been imported as. */
export interface Helpers {
    matches?: string
    throwUnmatched?: string
}

export interface Context {
    code: string
    filePath: string
    helpers: Helpers
    ids: Set<string>
    /** The name `match` has been imported as. */
    match: string
    ms: MagicString
    /** How often something that has been imported has been compiled away, by the name it is exported as. */
    used: { _: number, match: number }
    /** The name `_` has been imported as, when it has been. */
    wildcard: string | undefined
    /** The name a helper is imported as. */
    helper: (name: keyof Helpers) => string
    id: (base: string) => string
    /** Whether a name is what has been imported where it is used, instead of something else of the same name. */
    isImport: (name: string) => boolean
    /** Whether a name always refers to the same value: a `const`, or something that nothing in the file assigns to. */
    isStable: (name: string) => boolean
}

/** What is being matched: a value, or the values of `match([a, b])`, which never have to become an array. */
export type Subject =
    | { kind: "value", name: string }
    | { kind: "tuple", names: string[] }

export interface Step {
    args: Node[]
    name: "case" | "cond" | "onCase" | "onCond" | "onShape" | "shape" | "unwrap" | "unwrapOr" | "unwrapOrElse"
}

export interface Chain {
    steps: Step[]
    subject: Node
}
