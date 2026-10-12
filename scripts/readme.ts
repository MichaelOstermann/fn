import { mkdtemp, readdir, rm } from "node:fs/promises"
import { tmpdir } from "node:os"
import Path from "node:path"
import { brotliCompressSync, gzipSync } from "node:zlib"

/**
 * Fills in what the README tells about the code, between `<!-- name -->` and `<!-- /name -->`:
 *
 * - `overview`, every function by a line of its example
 * - `size`, what everything weighs once minified, which needs the packages to be built
 *
 * The README of the repository is the one of the package as well, npm shows that one.
 */
const root = Path.resolve(import.meta.dirname, "..")
const src = Path.join(root, "packages/stdlib/src")
const dist = Path.join(root, "packages/stdlib/dist")

/** What functions live on, in the order they are listed. */
const globals = ["Array", "Object", "Map", "Set", "String", "Number", "Math", "JSON", "Promise", "Function", "Duration", "Bytes"]

let readme = await Bun.file(Path.join(root, "README.md")).text()
readme = fill(readme, "overview", await overview())
readme = fill(readme, "size", await size())

await write("README.md", readme)
await write("packages/stdlib/README.md", readme)

async function overview(): Promise<string> {
    const sections: string[] = []
    for (const global of globals) {
        const files = (await readdir(Path.join(src, global))).filter(file => /^[\w$]+\.ts$/.test(file) && file !== "index.ts" && file !== "types.ts").sort((a, b) => a.localeCompare(b))
        const lines = await Promise.all(files.map(async (file) => {
            const name = file.slice(0, -3)
            return example(await Bun.file(Path.join(src, global, file)).text(), global, name)
        }))
        sections.push(`\`\`\`ts\n${lines.join("\n")}\n\`\`\``)
    }
    return sections.join("\n\n")
}

/** The line of the example of a function that shows it best: the first one that tells what a call results in. */
function example(code: string, global: string, name: string): string {
    const doc = code.match(new RegExp(`/\\*\\*\\n \\* # ${name}\\n([\\s\\S]*?)\\*/`))?.[1]
    if (!doc) throw new Error(`${global}.${name} is not documented.`)
    const text = doc.split("\n").map(line => line.replace(/^ \* ?/, ""))
    const lines = text.slice(text.indexOf("## Example")).filter(line => line.includes(`${global}.${name}`))
    const line = lines.find(line => line.includes("; // ")) ?? lines[0]
    if (!line) throw new Error(`${global}.${name} has no example.`)
    return line.trim()
}

async function size(): Promise<string> {
    if (!await Bun.file(Path.join(dist, "patch.mjs")).exists()) throw new Error("Build the packages first: bun run bundles")
    const measure = async (entry: string): Promise<string[]> => {
        const outdir = await mkdtemp(Path.join(tmpdir(), "stdlib-size-"))
        const result = await Bun.build({ entrypoints: [Path.join(dist, entry)], minify: true, outdir, target: "browser" })
        const code = Buffer.from(await result.outputs[0]!.arrayBuffer())
        await rm(outdir, { recursive: true })
        return [kb(code.length), kb(gzipSync(code, { level: 9 }).length), kb(brotliCompressSync(code).length)]
    }

    const rows = [
        ["", "Minified", "Gzip", "Brotli"],
        ["Everything", ...await measure("patch.mjs")],
        ["`match`, without the plugin", ...await measure("match.mjs")],
        ["`Result` and `ResultAsync`", ...await measure("ResultAsync.mjs")],
        ["`String.slugify`, the largest function", ...await measure("String/slugify.mjs")],
        ["`Array.removeAll`, a typical one", ...await measure("Array/removeAll.mjs")],
    ]

    // Aligned the way the formatter wants tables to be.
    const widths = rows[0]!.map((_, column) => Math.max(3, ...rows.map(row => row[column]!.length)))
    const lines = rows.map(row => `| ${row.map((cell, column) => cell.padEnd(widths[column]!)).join(" | ")} |`)
    lines.splice(1, 0, `| ${widths.map(width => "-".repeat(width)).join(" | ")} |`)
    return lines.join("\n")
}

function kb(bytes: number): string {
    return `${(bytes / 1000).toFixed(bytes < 10_000 ? 2 : 1)} kB`
}

function fill(text: string, name: string, contents: string): string {
    const start = `<!-- ${name} -->`
    const end = `<!-- /${name} -->`
    const from = text.indexOf(start)
    const to = text.indexOf(end)
    if (from === -1 || to === -1) throw new Error(`The README has no ${start} … ${end}`)
    return `${text.slice(0, from + start.length)}\n\n${contents}\n\n${text.slice(to)}`
}

/** Files are only written when their contents changed. */
async function write(file: string, contents: string): Promise<void> {
    const path = Path.join(root, file)
    if (await Bun.file(path).exists() && await Bun.file(path).text() === contents) return
    await Bun.write(path, contents)
    console.log(`Updated ${file}`)
}
