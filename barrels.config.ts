import { defineConfig, flat, namespace } from "@monstermann/barrels"

export default defineConfig([
    namespace({
        entries: "./packages/fn/src/[A-Z]*",
    }),
    flat({
        entries: "./packages/fn/src",
        include: ["*.ts", "[A-Z]*/index.js"],
    }),
])
