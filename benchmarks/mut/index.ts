import { filter } from "../../packages/fn/src/Array/filter"
import { map } from "../../packages/fn/src/Array/map"
import { mapFirstWhere } from "../../packages/fn/src/Array/mapFirstWhere"
import { mapWhere } from "../../packages/fn/src/Array/mapWhere"
import { removeAll } from "../../packages/fn/src/Array/removeAll"
import { removeFirst } from "../../packages/fn/src/Array/removeFirst"
import { removeFirstWhere } from "../../packages/fn/src/Array/removeFirstWhere"
import { removeWhere } from "../../packages/fn/src/Array/removeWhere"
import { replaceFirst } from "../../packages/fn/src/Array/replaceFirst"
import { replaceFirstWhere } from "../../packages/fn/src/Array/replaceFirstWhere"
import { shuffle } from "../../packages/fn/src/Array/shuffle"

// Compares a series of updates that each copy the array to the same updates on one copy with { mut: true }: bun benchmarks/mut/index.ts

const rounds = 15
const sizes = [10, 1000]

/** One update, `i` counts up from 0. The array holds the numbers from 0 to its length, each once. */
type Update = (target: number[], i: number, options: { mut?: boolean } | undefined) => number[]

const benchmarks: [name: string, update: Update][] = [
    ["map", (target, i, options) => map(target, value => value + i + 1, options)],
    ["filter", (target, i, options) => filter(target, value => value !== i * 2, options)],
    ["mapFirstWhere", (target, i, options) => mapFirstWhere(target, value => value === i * 2, value => -value - 1, options)],
    ["mapWhere", (target, i, options) => mapWhere(target, value => value % 2 === 0, value => value + (i + 1) * 2, options)],
    ["removeFirst", (target, i, options) => removeFirst(target, i * 2, options)],
    ["removeFirstWhere", (target, i, options) => removeFirstWhere(target, value => value === i * 2, options)],
    ["removeAll", (target, i, options) => removeAll(target, [i * 2], options)],
    ["removeWhere", (target, i, options) => removeWhere(target, value => value === i * 2, options)],
    ["replaceFirst", (target, i, options) => replaceFirst(target, i * 2, -i - 1, options)],
    ["replaceFirstWhere", (target, i, options) => replaceFirstWhere(target, value => value === i * 2, -i - 1, options)],
    ["shuffle", (target, _, options) => shuffle(target, options)],
]

for (const size of sizes) {
    const base = Array.from({ length: size }, (_, i) => i)
    // Half as many updates as there are elements, so the ones that remove never run out of something to remove.
    const updates = size / 2
    // The same amount of elements to go through for every size.
    const repeats = Math.ceil(4_000_000 / size / updates)

    const copying = (update: Update): number => {
        let sum = 0
        for (let r = 0; r < repeats; r++) {
            let target = base
            for (let i = 0; i < updates; i++) target = update(target, i, undefined)
            sum += target.length
        }
        return sum
    }

    const mutating = (update: Update): number => {
        let sum = 0
        for (let r = 0; r < repeats; r++) {
            const target = [...base]
            for (let i = 0; i < updates; i++) update(target, i, { mut: true })
            sum += target.length
        }
        return sum
    }

    const times = new Map<string, number[]>()
    for (let round = 0; round < rounds; round++) {
        for (const [name, update] of benchmarks) {
            for (const [kind, run] of [["copy", copying], ["mut", mutating]] as const) {
                const start = performance.now()
                const sum = run(update)
                const time = performance.now() - start
                if (!sum) throw new Error(name)
                const key = `${name} ${kind}`
                if (!times.has(key)) times.set(key, [])
                times.get(key)!.push(time)
            }
        }
    }

    const median = (name: string, kind: string): number => {
        // The first rounds are spent warming up.
        const sorted = times.get(`${name} ${kind}`)!.slice(5).sort((a, b) => a - b)
        return sorted[Math.floor(sorted.length / 2)]! * 1e6 / (repeats * updates)
    }

    console.log(`\n${updates} updates of ${size} elements, ns per update`)
    console.log(`${"".padEnd(16)} ${"copy".padStart(9)} ${"mut".padStart(9)}`)
    for (const [name] of benchmarks) {
        const copy = median(name, "copy")
        const mut = median(name, "mut")
        console.log(`${name.padEnd(16)} ${copy.toFixed(1).padStart(9)} ${mut.toFixed(1).padStart(9)}   ${(copy / mut).toFixed(1)}x`)
    }
}
