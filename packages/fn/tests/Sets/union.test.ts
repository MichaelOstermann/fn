import { describe, expect, it } from "bun:test"
import { Sets } from "../../src/Sets/index"

describe("Sets.union", () => {
    it("should return all elements from both sets", () => {
        const target = Sets.create([1, 2])
        const source = Sets.create([2, 3, 4])
        const result = Sets.union(target, source)
        expect(result).toEqual(Sets.create([1, 2, 3, 4]))
    })

    it("should return target unchanged when source is empty", () => {
        const target = Sets.create([1, 2, 3])
        const source = Sets.create<number>([])
        const result = Sets.union(target, source)
        expect(result).toBe(target)
    })

    it("should return source unchanged when target is empty", () => {
        const target = Sets.create<number>([])
        const source = Sets.create([1, 2, 3])
        const result = Sets.union(target, source)
        expect(result).toBe(source)
    })

    it("should return target unchanged when source is subset", () => {
        const target = Sets.create([1, 2, 3, 4])
        const source = Sets.create([2, 3])
        const result = Sets.union(target, source)
        expect(result).toBe(target)
    })

    it("should handle no overlap", () => {
        const target = Sets.create([1, 2])
        const source = Sets.create([3, 4])
        const result = Sets.union(target, source)
        expect(result).toEqual(Sets.create([1, 2, 3, 4]))
    })

    it("should handle single element sets with same element", () => {
        const target = Sets.create([1])
        const source = Sets.create([1])
        const result = Sets.union(target, source)
        expect(result).toBe(target)
    })

    it("should handle single element sets with different elements", () => {
        const target = Sets.create([1])
        const source = Sets.create([2])
        const result = Sets.union(target, source)
        expect(result).toEqual(Sets.create([1, 2]))
    })

    it("should handle new element at start of source", () => {
        const target = Sets.create([2, 3, 4])
        const source = Sets.create([1, 2, 3])
        const result = Sets.union(target, source)
        expect(result).toEqual(Sets.create([1, 2, 3, 4]))
    })

    it("should handle new element at end of source", () => {
        const target = Sets.create([1, 2, 3])
        const source = Sets.create([2, 3, 4])
        const result = Sets.union(target, source)
        expect(result).toEqual(Sets.create([1, 2, 3, 4]))
    })

    it("should handle new element in middle of source", () => {
        const target = Sets.create([1, 3, 5])
        const source = Sets.create([1, 2, 3])
        const result = Sets.union(target, source)
        expect(result).toEqual(Sets.create([1, 2, 3, 5]))
    })

    it("should work with curried form", () => {
        const target = Sets.create([1, 2])
        const source = Sets.create([2, 3, 4])
        const unionWith = Sets.union(source)
        const result = unionWith(target)
        expect(result).toEqual(Sets.create([1, 2, 3, 4]))
    })

    it("should handle string elements", () => {
        const target = Sets.create(["a", "b"])
        const source = Sets.create(["b", "c", "d"])
        const result = Sets.union(target, source)
        expect(result).toEqual(Sets.create(["a", "b", "c", "d"]))
    })

    it("should handle object elements", () => {
        const obj1 = { id: 1 }
        const obj2 = { id: 2 }
        const obj3 = { id: 3 }
        const target = Sets.create([obj1, obj2])
        const source = Sets.create([obj2, obj3])
        const result = Sets.union(target, source)
        expect(result).toEqual(Sets.create([obj1, obj2, obj3]))
    })

    it("should preserve all target elements when creating result", () => {
        const target = Sets.create([1, 2, 3, 4, 5])
        const source = Sets.create([6])
        const result = Sets.union(target, source)
        expect(result).toEqual(Sets.create([1, 2, 3, 4, 5, 6]))
    })

    it("should return target unchanged when both sets are empty", () => {
        const target = Sets.create<number>([])
        const source = Sets.create<number>([])
        const result = Sets.union(target, source)
        expect(result).toBe(target)
    })

    it("should return target unchanged when sets are equal", () => {
        const target = Sets.create([1, 2, 3])
        const source = Sets.create([1, 2, 3])
        const result = Sets.union(target, source)
        expect(result).toBe(target)
    })

    it("should create new set when target is subset", () => {
        const target = Sets.create([2, 3])
        const source = Sets.create([1, 2, 3, 4])
        const result = Sets.union(target, source)
        expect(result).toEqual(Sets.create([1, 2, 3, 4]))
        expect(result).not.toBe(target)
        expect(result).not.toBe(source)
    })
})
