import { pipe } from "../../packages/fn/src/pipe"

// Compares calls as they are replaced to running them as they are: bun benchmarks/pipe/index.ts

const size = 1_000_000
const rounds = 15
const numbers: number[] = Array.from({ length: size }, (_, i) => i % 1000)
const lists: number[][] = Array.from({ length: size }, (_, i) => [i % 7, i % 5, i % 3, i % 2])

const add = (a: number, b: number): number => a + b
const multiply = (a: number, b: number): number => a * b
const sum = (values: number[]): number => values.reduce(add, 0)

const benchmarks: [name: string, run: () => number][] = [
    ["three steps, replaced", () => {
        let result = 0
        for (let i = 0; i < size; i++) result += add(multiply(add(numbers[i]!, 1), 2), 3)
        return result
    }],
    ["three steps, callbacks called as they are", () => {
        let result = 0
        for (let i = 0; i < size; i++) result += (n => add(n, 3))((n => multiply(n, 2))((n => add(n, 1))(numbers[i]!)))
        return result
    }],
    ["three steps", () => {
        let result = 0
        for (let i = 0; i < size; i++) result += pipe(numbers[i]!, n => add(n, 1), n => multiply(n, 2), n => add(n, 3))
        return result
    }],
    ["filter, map, sum, replaced", () => {
        let result = 0
        for (let i = 0; i < size; i++) result += sum(lists[i]!.filter(n => n > 0).map(n => n * 2))
        return result
    }],
    ["filter, map, sum", () => {
        let result = 0
        for (let i = 0; i < size; i++) result += pipe(lists[i]!, list => list.filter(n => n > 0), list => list.map(n => n * 2), sum)
        return result
    }],
]

const expected = [benchmarks[0]![1](), benchmarks[0]![1](), benchmarks[0]![1](), benchmarks[3]![1](), benchmarks[3]![1]()]

for (const [i, [name, run]] of benchmarks.entries()) {
    const times: number[] = []
    for (let round = 0; round < rounds; round++) {
        const start = performance.now()
        const result = run()
        times.push(performance.now() - start)
        if (result !== expected[i]) throw new Error(`${name}: ${result} instead of ${expected[i]}`)
    }
    times.sort((a, b) => a - b)
    console.log(`${name.padEnd(45)} ${(times[Math.floor(rounds / 2)]! * 1e6 / size).toFixed(1).padStart(6)} ns`)
}
