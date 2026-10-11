/** The namespaces of @monstermann/fn, each member is a file of the same name: `Rect.area` → `Rect/area.mjs`. */
export const namespaces: ReadonlySet<string> = new Set([
    "Rect",
])

/** Everything else @monstermann/fn exports, and the file it lives in: `pipe` → `pipe.mjs`. */
export const functions: ReadonlyMap<string, string> = new Map([
    ["_", "_"],
    ["Err", "Result"],
    ["ErrAsync", "ResultAsync"],
    ["match", "match"],
    ["Ok", "Result"],
    ["OkAsync", "ResultAsync"],
    ["pipe", "pipe"],
    ["Result", "Result"],
    ["ResultAsync", "ResultAsync"],
])

/** Files that are only there for when the code runs as it is written. */
export const guards: readonly string[] = [
    "globals",
    "patch",
]
