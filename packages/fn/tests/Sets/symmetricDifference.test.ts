import { describe, expect, it } from "bun:test"
import { Sets } from "../../src/Sets/index"

describe("Sets.symmetricDifference", () => {
    it("should return elements in either set but not both", () => {
        const target = Sets.create([1, 2, 3])
        const source = Sets.create([3, 4, 5])
        const result = Sets.symmetricDifference(target, source)
        expect(result).toEqual(Sets.create([1, 2, 4, 5]))
    })

    it("should return target unchanged when source is empty", () => {
        const target = Sets.create([1, 2, 3])
        const source = Sets.create<number>([])
        const result = Sets.symmetricDifference(target, source)
        expect(result).toBe(target)
    })

    it("should return source unchanged when target is empty", () => {
        const target = Sets.create<number>([])
        const source = Sets.create([1, 2, 3])
        const result = Sets.symmetricDifference(target, source)
        expect(result).toBe(source)
    })

    it("should return all elements when there is no overlap", () => {
        const target = Sets.create([1, 2])
        const source = Sets.create([3, 4])
        const result = Sets.symmetricDifference(target, source)
        expect(result).toEqual(Sets.create([1, 2, 3, 4]))
    })

    it("should return empty set when sets are identical", () => {
        const target = Sets.create([1, 2, 3])
        const source = Sets.create([1, 2, 3])
        const result = Sets.symmetricDifference(target, source)
        expect(result).toEqual(Sets.create([]))
    })

    it("should handle single element sets with same element", () => {
        const target = Sets.create([1])
        const source = Sets.create([1])
        const result = Sets.symmetricDifference(target, source)
        expect(result).toEqual(Sets.create([]))
    })

    it("should handle single element sets with different elements", () => {
        const target = Sets.create([1])
        const source = Sets.create([2])
        const result = Sets.symmetricDifference(target, source)
        expect(result).toEqual(Sets.create([1, 2]))
    })

    it("should handle partial overlap at start", () => {
        const target = Sets.create([1, 2, 3])
        const source = Sets.create([1, 4, 5])
        const result = Sets.symmetricDifference(target, source)
        expect(result).toEqual(Sets.create([2, 3, 4, 5]))
    })

    it("should handle partial overlap at end", () => {
        const target = Sets.create([1, 2, 3])
        const source = Sets.create([3, 4, 5])
        const result = Sets.symmetricDifference(target, source)
        expect(result).toEqual(Sets.create([1, 2, 4, 5]))
    })

    it("should handle partial overlap in middle", () => {
        const target = Sets.create([1, 2, 3])
        const source = Sets.create([2, 4, 5])
        const result = Sets.symmetricDifference(target, source)
        expect(result).toEqual(Sets.create([1, 3, 4, 5]))
    })

    it("should handle target subset of source", () => {
        const target = Sets.create([2, 3])
        const source = Sets.create([1, 2, 3, 4])
        const result = Sets.symmetricDifference(target, source)
        expect(result).toEqual(Sets.create([1, 4]))
    })

    it("should handle source subset of target", () => {
        const target = Sets.create([1, 2, 3, 4])
        const source = Sets.create([2, 3])
        const result = Sets.symmetricDifference(target, source)
        expect(result).toEqual(Sets.create([1, 4]))
    })

    it("should work with curried form", () => {
        const target = Sets.create([1, 2, 3])
        const source = Sets.create([3, 4, 5])
        const symDiff = Sets.symmetricDifference(source)
        const result = symDiff(target)
        expect(result).toEqual(Sets.create([1, 2, 4, 5]))
    })

    it("should handle string elements", () => {
        const target = Sets.create(["a", "b", "c"])
        const source = Sets.create(["c", "d", "e"])
        const result = Sets.symmetricDifference(target, source)
        expect(result).toEqual(Sets.create(["a", "b", "d", "e"]))
    })

    it("should handle object elements", () => {
        const obj1 = { id: 1 }
        const obj2 = { id: 2 }
        const obj3 = { id: 3 }
        const obj4 = { id: 4 }
        const target = Sets.create([obj1, obj2, obj3])
        const source = Sets.create([obj3, obj4])
        const result = Sets.symmetricDifference(target, source)
        expect(result).toEqual(Sets.create([obj1, obj2, obj4]))
    })

    it("should handle multiple overlapping elements", () => {
        const target = Sets.create([1, 2, 3, 4, 5])
        const source = Sets.create([3, 4, 5, 6, 7])
        const result = Sets.symmetricDifference(target, source)
        expect(result).toEqual(Sets.create([1, 2, 6, 7]))
    })

    it("should return target unchanged when both sets are empty", () => {
        const target = Sets.create<number>([])
        const source = Sets.create<number>([])
        const result = Sets.symmetricDifference(target, source)
        expect(result).toBe(target)
    })
})
