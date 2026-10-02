/** The namespaces of @monstermann/fn, each member is a file of the same name: `Arr.at` → `Arr/at.mjs`. */
export const namespaces: ReadonlySet<string> = new Set([
    "Arr",
    "Async",
    "Dll",
    "Dsp",
    "Maps",
    "Num",
    "Obj",
    "Rect",
    "Sets",
    "Str",
])

/** The functions of @monstermann/fn, each is a file of the same name: `pipe` → `pipe.mjs`. */
export const functions: ReadonlySet<string> = new Set([
    "cloneArray",
    "cloneMap",
    "cloneObject",
    "cloneSet",
    "dfdl",
    "dfdlT",
    "endMutations",
    "flow",
    "isImmutable",
    "isMutable",
    "isMutating",
    "markAsImmutable",
    "markAsMutable",
    "match",
    "pauseMutations",
    "pipe",
    "startMutations",
    "withMutations",
])
