import { P, match as tsPattern } from "ts-pattern"
import { match } from "../../packages/stdlib/src/match"
import { A, B, C, D, E, F, Kind } from "./constants"

// Compares chains as they are compiled to running them as they are, and to ts-pattern: bun benchmarks/match/index.ts

const size = 1_000_000
const rounds = 15
const kinds = ["a", "b", "c", "d", "e", "f", "g", "h"]

let seed = 1
function random(): number {
    seed = (seed * 1664525 + 1013904223) % 4294967296
    return seed / 4294967296
}

const pick = (): string => kinds[Math.floor(random() * kinds.length)]!
const values: string[] = Array.from({ length: size }, pick)
const shapes: { type: string }[] = Array.from({ length: size }, () => ({ type: pick() }))
const tuples: [string, string][] = Array.from({ length: size }, () => [pick(), pick()])

const benchmarks: [name: string, run: () => number][] = [
    ["cases, compiled", () => {
        let sum = 0
        for (let i = 0; i < size; i++) {
            const v = values[i]!
            sum += v === A ? 1 : v === B ? 2 : v === C ? 3 : v === D ? 4 : v === E ? 5 : v === F ? 6 : 0
        }
        return sum
    }],
    ["cases", () => {
        let sum = 0
        for (let i = 0; i < size; i++) {
            sum += match(values[i]!).case(A, 1).case(B, 2).case(C, 3).case(D, 4).case(E, 5).case(F, 6).unwrapOr(0)
        }
        return sum
    }],
    ["shapes, compiled", () => {
        let sum = 0
        for (let i = 0; i < size; i++) {
            const v = shapes[i]!
            sum += (typeof v === "object" && v !== null && v.type === Kind.a)
                ? 1
                : (typeof v === "object" && v !== null && v.type === Kind.b)
                        ? 2
                        : (typeof v === "object" && v !== null && v.type === Kind.c) ? 3 : 0
        }
        return sum
    }],
    ["shapes", () => {
        let sum = 0
        for (let i = 0; i < size; i++) {
            sum += (match(shapes[i]!) as any).shape({ type: Kind.a }, 1).shape({ type: Kind.b }, 2).shape({ type: Kind.c }, 3).unwrapOr(0)
        }
        return sum
    }],
    ["tuples, compiled", () => {
        let sum = 0
        for (let i = 0; i < size; i++) {
            const v = tuples[i]!
            const [a, b] = v
            sum += (a === A && b === B) ? 1 : (a === C) ? 2 : (a === E && b === F) ? 3 : 0
        }
        return sum
    }],
    ["tuples", () => {
        let sum = 0
        for (let i = 0; i < size; i++) {
            const v = tuples[i]!
            sum += (match([v[0], v[1]]) as any).shape([A, B], 1).shape([C, match._], 2).shape([E, F], 3).unwrapOr(0)
        }
        return sum
    }],
    ["cases, ts-pattern", () => {
        let sum = 0
        for (let i = 0; i < size; i++) {
            sum += tsPattern(values[i]!).with(A, () => 1).with(B, () => 2).with(C, () => 3).with(D, () => 4).with(E, () => 5).with(F, () => 6).otherwise(() => 0)
        }
        return sum
    }],
    ["shapes, ts-pattern", () => {
        let sum = 0
        for (let i = 0; i < size; i++) {
            sum += tsPattern(shapes[i]!).with({ type: Kind.a }, () => 1).with({ type: Kind.b }, () => 2).with({ type: Kind.c }, () => 3).otherwise(() => 0)
        }
        return sum
    }],
    ["tuples, ts-pattern", () => {
        let sum = 0
        for (let i = 0; i < size; i++) {
            const v = tuples[i]!
            sum += tsPattern([v[0], v[1]]).with([A, B], () => 1).with([C, P._], () => 2).with([E, F], () => 3).otherwise(() => 0)
        }
        return sum
    }],
]

const times = new Map<string, number[]>()
for (let round = 0; round < rounds; round++) {
    for (const [name, run] of benchmarks) {
        const start = performance.now()
        const sum = run()
        const time = performance.now() - start
        if (!sum) throw new Error(name)
        if (!times.has(name)) times.set(name, [])
        times.get(name)!.push(time)
    }
}

for (const [name, all] of times) {
    // The first rounds are spent warming up.
    const sorted = all.slice(5).sort((a, b) => a - b)
    const median = sorted[Math.floor(sorted.length / 2)]!
    console.log(`${name.padEnd(18)} ${(median * 1e6 / size).toFixed(2).padStart(7)} ns per chain`)
}
