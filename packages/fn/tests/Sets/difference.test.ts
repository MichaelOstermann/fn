import { describe, expect, it } from "bun:test"
import { Sets } from "../../src/Sets/index"

describe("Sets.difference", () => {
    it("should return elements in target but not in source", () => {
        const target = Sets.create([1, 2, 3])
        const source = Sets.create([2, 3, 4])
        const result = Sets.difference(target, source)
        expect(result).toEqual(Sets.create([1]))
    })

    it("should return target unchanged when source is empty", () => {
        const target = Sets.create([1, 2, 3])
        const source = Sets.create<number>([])
        const result = Sets.difference(target, source)
        expect(result).toBe(target)
    })

    it("should return target unchanged when there is no overlap", () => {
        const target = Sets.create([1, 2])
        const source = Sets.create([3, 4])
        const result = Sets.difference(target, source)
        expect(result).toBe(target)
    })

    it("should return empty set when source contains all target elements", () => {
        const target = Sets.create([1, 2])
        const source = Sets.create([1, 2, 3, 4])
        const result = Sets.difference(target, source)
        expect(result).toEqual(Sets.create([]))
    })

    it("should handle single element sets", () => {
        const target = Sets.create([1])
        const source = Sets.create([1])
        const result = Sets.difference(target, source)
        expect(result).toEqual(Sets.create([]))
    })

    it("should handle partial overlap at start of target", () => {
        const target = Sets.create([1, 2, 3, 4, 5])
        const source = Sets.create([1])
        const result = Sets.difference(target, source)
        expect(result).toEqual(Sets.create([2, 3, 4, 5]))
    })

    it("should handle partial overlap at end of target", () => {
        const target = Sets.create([1, 2, 3, 4, 5])
        const source = Sets.create([5])
        const result = Sets.difference(target, source)
        expect(result).toEqual(Sets.create([1, 2, 3, 4]))
    })

    it("should handle partial overlap in middle of target", () => {
        const target = Sets.create([1, 2, 3, 4, 5])
        const source = Sets.create([3])
        const result = Sets.difference(target, source)
        expect(result).toEqual(Sets.create([1, 2, 4, 5]))
    })

    it("should work with curried form", () => {
        const target = Sets.create([1, 2, 3])
        const source = Sets.create([2, 3, 4])
        const diff = Sets.difference(source)
        const result = diff(target)
        expect(result).toEqual(Sets.create([1]))
    })

    it("should handle string elements", () => {
        const target = Sets.create(["a", "b", "c"])
        const source = Sets.create(["b", "c", "d"])
        const result = Sets.difference(target, source)
        expect(result).toEqual(Sets.create(["a"]))
    })

    it("should handle object elements", () => {
        const obj1 = { id: 1 }
        const obj2 = { id: 2 }
        const obj3 = { id: 3 }
        const target = Sets.create([obj1, obj2, obj3])
        const source = Sets.create([obj2])
        const result = Sets.difference(target, source)
        expect(result).toEqual(Sets.create([obj1, obj3]))
    })

    it("should return target unchanged when target is empty", () => {
        const target = Sets.create<number>([])
        const source = Sets.create([1, 2, 3])
        const result = Sets.difference(target, source)
        expect(result).toBe(target)
    })

    it("should return target unchanged when both sets are empty", () => {
        const target = Sets.create<number>([])
        const source = Sets.create<number>([])
        const result = Sets.difference(target, source)
        expect(result).toBe(target)
    })

    it("should handle multiple overlapping elements", () => {
        const target = Sets.create([1, 2, 3, 4, 5])
        const source = Sets.create([2, 4])
        const result = Sets.difference(target, source)
        expect(result).toEqual(Sets.create([1, 3, 5]))
    })
})
