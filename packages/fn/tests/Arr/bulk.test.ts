import { describe, expect, it } from "bun:test"
import { Arr } from "../../src/Arr/index"
import { withMutations } from "../../src/withMutations"

const holes = (array: unknown[]): number[] => Array.from(array.keys()).filter(i => !(i in array))

describe("Arr.filter", () => {
    it("should keep what matches", () => {
        expect(Arr.filter([1, 2, 3, 4, 5, 6], n => n % 2 === 0)).toEqual([2, 4, 6])
        expect(Arr.filter([1, 2, 3, 4, 5, 6], n => n > 2 && n < 5)).toEqual([3, 4])
        expect(Arr.filter([1, 2, 3], () => false)).toEqual([])
        expect(Arr.filter([], () => false)).toEqual([])
    })

    it("should match the native filter for every combination", () => {
        for (let mask = 0; mask < 1 << 10; mask++) {
            const target = Array.from({ length: 10 }, (_, i) => i)
            const keep = (n: number): boolean => (mask & (1 << n)) !== 0
            expect(Arr.filter(target, keep)).toEqual(target.filter(keep))
            expect(Arr.reject(target, keep)).toEqual(target.filter(n => !keep(n)))
        }
    })

    it("should return the same array when nothing is removed", () => {
        const target = [1, 2, 3]
        expect(Arr.filter(target, () => true)).toBe(target)
        expect(Arr.reject(target, () => false)).toBe(target)
    })

    it("should not modify the array", () => {
        const target = Object.freeze([1, 2, 3, 4])
        expect(Arr.filter(target, n => n % 2 === 0)).toEqual([2, 4])
        expect(Arr.reject(target, n => n % 2 === 0)).toEqual([1, 3])
    })

    it("should call the predicate with the value, index and array, before anything is removed", () => {
        const target = ["a", "b", "c"]
        const calls: unknown[][] = []
        Arr.filter(target, (...args) => {
            calls.push([args[0], args[1], args[2] === target, args[2].length])
            return args[0] !== "a"
        })
        expect(calls).toEqual([["a", 0, true, 3], ["b", 1, true, 3], ["c", 2, true, 3]])
    })

    it("should keep holes", () => {
        // eslint-disable-next-line no-sparse-arrays
        const target = [0, , 2, , 4, 5]
        const result = Arr.filter(target, value => value !== 2)
        expect(result.length).toBe(5)
        expect(holes(result)).toEqual([1, 2])
        expect(result[3]).toBe(4)
    })

    it("should modify the array inside of mutations", () => {
        withMutations(() => {
            const target = Arr.filter([1, 2, 3, 4, 5], n => n !== 1)
            const result = Arr.filter(target, n => n % 2 === 0)
            expect(result).toBe(target)
            expect(result).toEqual([2, 4])
            expect(Arr.reject(result, n => n === 2)).toBe(target)
            expect(target).toEqual([4])
        })
    })
})

describe("Arr.removeAll", () => {
    it("should remove every occurrence of the values", () => {
        expect(Arr.removeAll([1, 2, 3, 2, 1], [2])).toEqual([1, 3, 1])
        expect(Arr.removeAll([1, 2, 3, 2, 1], [1, 2])).toEqual([3])
        expect(Arr.removeAll([1, 2, 3, 2, 1], [3, 1])).toEqual([2, 2])
        expect(Arr.removeAll([1, 2, 3], new Set([3, 2, 1, 1]))).toEqual([])
        expect(Arr.removeAll(["a", "b"], ["b", "b"])).toEqual(["a"])
    })

    it("should match removing each value on its own for random inputs", () => {
        let seed = 1
        const random = (max: number): number => (seed = (seed * 48271) % 2147483647) % max
        for (let run = 0; run < 300; run++) {
            const target = Array.from({ length: random(40) }, () => random(12))
            const values = Array.from({ length: random(14) }, () => random(14))
            expect(Arr.removeAll(target, values)).toEqual(target.filter(value => !values.includes(value)))
        }
    })

    it("should return the same array when nothing is removed", () => {
        const target = [1, 2, 3]
        expect(Arr.removeAll(target, [4, 5])).toBe(target)
        expect(Arr.removeAll(target, [])).toBe(target)
    })

    it("should compare like indexOf", () => {
        expect(Arr.removeAll([Number.NaN, 1], [Number.NaN])).toEqual([Number.NaN, 1])
        expect(Arr.removeAll([0, -0, 1], [0])).toEqual([1])
        expect(Arr.removeAll(["1", 1], [1])).toEqual(["1"])
        const object = {}
        expect(Arr.removeAll([object, {}], [object])).toEqual([{}])
    })

    it("should not take holes for undefined", () => {
        // eslint-disable-next-line no-sparse-arrays
        const target = [1, , undefined, 2]
        const result = Arr.removeAll(target, [undefined, 2])
        expect(result.length).toBe(2)
        expect(holes(result)).toEqual([1])
    })

    it("should modify the array inside of mutations", () => {
        withMutations(() => {
            const target = Arr.removeAll([1, 2, 3, 4], [1])
            expect(Arr.removeAll(target, [3, 2])).toBe(target)
            expect(target).toEqual([4])
        })
    })
})

describe("Arr.union", () => {
    it("should add what is missing", () => {
        expect(Arr.union([1, 2], [2, 3, 4])).toEqual([1, 2, 3, 4])
        expect(Arr.union<number>([], [1, 2])).toEqual([1, 2])
        expect(Arr.union([1, 2], new Set([3]))).toEqual([1, 2, 3])
    })

    it("should add a value once", () => {
        expect(Arr.union([1], [2, 2, 3, 2])).toEqual([1, 2, 3])
        expect(Arr.union([Number.NaN], [Number.NaN, Number.NaN])).toEqual([Number.NaN])
    })

    it("should keep duplicates the array already has", () => {
        expect(Arr.union([1, 1, 2], [2, 3])).toEqual([1, 1, 2, 3])
    })

    it("should return the same array when nothing is added", () => {
        const target = [1, 2, 3]
        expect(Arr.union(target, [3, 1])).toBe(target)
        expect(Arr.union(target, [])).toBe(target)
    })

    it("should work the same for small and large arrays", () => {
        for (const size of [0, 1, 8, 16, 17, 64, 500]) {
            const target = Array.from({ length: size }, (_, i) => i * 2)
            const source = Array.from({ length: size + 5 }, (_, i) => i * 3 % (size + 7))
            const expected = Array.from(new Set([...target, ...source]))
            expect(Arr.union(target, source)).toEqual(expected)
        }
    })

    it("should modify the array inside of mutations", () => {
        withMutations(() => {
            const target = Arr.union([1], [2])
            expect(Arr.union(target, [2, 3, 3])).toBe(target)
            expect(target).toEqual([1, 2, 3])
        })
    })
})

describe("Arr.includesAll, includesAny, includesNone", () => {
    it("should check the values", () => {
        expect(Arr.includesAll([1, 2, 3], [1, 3])).toBe(true)
        expect(Arr.includesAll([1, 2, 3], [1, 4])).toBe(false)
        expect(Arr.includesAll([1, 2, 3], [])).toBe(true)
        expect(Arr.includesAny([1, 2, 3], [4, 3])).toBe(true)
        expect(Arr.includesAny([1, 2, 3], [4, 5])).toBe(false)
        expect(Arr.includesAny([1, 2, 3], [])).toBe(false)
        expect(Arr.includesNone([1, 2, 3], [4, 5])).toBe(true)
        expect(Arr.includesNone([1, 2, 3], [4, 3])).toBe(false)
        expect(Arr.includesNone([1, 2, 3], [])).toBe(true)
    })

    it("should compare like includes", () => {
        expect(Arr.includesAll([Number.NaN], [Number.NaN])).toBe(true)
        // eslint-disable-next-line no-sparse-arrays
        expect(Arr.includesAny([1, , 2], [undefined])).toBe(true)
        expect(Arr.includesNone([0], [-0])).toBe(false)
    })

    it("should work the same for small and large inputs", () => {
        for (const size of [1, 8, 16, 17, 64, 500]) {
            const target = Array.from({ length: size }, (_, i) => i)
            const inside = Array.from({ length: size }, (_, i) => size - 1 - i)
            const outside = Array.from({ length: size }, (_, i) => size + i)
            expect(Arr.includesAll(target, inside)).toBe(true)
            expect(Arr.includesAll(target, [...inside, size])).toBe(false)
            expect(Arr.includesAny(target, outside)).toBe(false)
            expect(Arr.includesAny(target, [...outside, 0])).toBe(true)
            expect(Arr.includesNone(target, outside)).toBe(true)
            expect(Arr.includesNone(target, [...outside, 0])).toBe(false)
        }
    })
})
