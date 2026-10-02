import { defineConfig, flat, namespace } from "@monstermann/barrels"

export default defineConfig([
    namespace({
        entries: "./packages/fn/src/[A-Z]*",
    }),
    flat({
        entries: "./packages/fn/src/remmi",
        exclude: "ctx.ts",
    }),
    flat({
        entries: "./packages/fn/src/dfdl",
        exclude: "types.ts",
    }),
    flat({
        entries: "./packages/fn/src",
        include: ["[A-Z]*/index.js", "dfdl/index.ts", "remmi/index.ts", "match/match.ts"],
    }),
])
