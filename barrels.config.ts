import { defineConfig, flat, namespace } from "@monstermann/barrels"

export default defineConfig([
    // What is not a global of its own. `Array`, `Function` and the like are collected by scripts/globals.ts instead.
    namespace({
        entries: "./packages/fn/src/Rect",
    }),
    flat({
        entries: "./packages/fn/src",
        exclude: ["declarations.ts", "globals.ts", "patch.ts"],
        include: ["*.ts", "Rect/index.js"],
    }),
])
