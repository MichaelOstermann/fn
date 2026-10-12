import { defineConfig } from "tsdown"

export default defineConfig({
    clean: true,
    dts: true,
    entry: ["./src/index.ts", "./src/globals.ts", "./src/patch.ts"],
    format: "esm",
    unbundle: true,
})
