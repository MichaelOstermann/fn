import { describe, expect, it } from "bun:test"
import { Sets } from "../../src/Sets/index"

describe("Sets.intersection", () => {
    it("should return elements present in both sets", () => {
        const target = Sets.create([1, 2, 3])
        const source = Sets.create([2, 3, 4])
        const result = Sets.intersection(target, source)
        expect(result).toEqual(Sets.create([2, 3]))
    })

    it("should return target unchanged when target is empty", () => {
        const target = Sets.create<number>([])
        const source = Sets.create([1, 2, 3])
        const result = Sets.intersection(target, source)
        expect(result).toBe(target)
    })

    it("should return source unchanged when source is empty", () => {
        const target = Sets.create([1, 2, 3])
        const source = Sets.create<number>([])
        const result = Sets.intersection(target, source)
        expect(result).toBe(source)
    })

    it("should return empty set when there is no overlap", () => {
        const target = Sets.create([1, 2])
        const source = Sets.create([3, 4])
        const result = Sets.intersection(target, source)
        expect(result).toEqual(Sets.create([]))
    })

    it("should return target unchanged when source is a superset", () => {
        const target = Sets.create([1, 2])
        const source = Sets.create([1, 2, 3, 4])
        const result = Sets.intersection(target, source)
        expect(result).toBe(target)
    })

    it("should handle single element sets with match", () => {
        const target = Sets.create([1])
        const source = Sets.create([1])
        const result = Sets.intersection(target, source)
        expect(result).toBe(target)
    })

    it("should handle single element sets without match", () => {
        const target = Sets.create([1])
        const source = Sets.create([2])
        const result = Sets.intersection(target, source)
        expect(result).toEqual(Sets.create([]))
    })

    it("should handle partial overlap at start of target", () => {
        const target = Sets.create([1, 2, 3, 4, 5])
        const source = Sets.create([1])
        const result = Sets.intersection(target, source)
        expect(result).toEqual(Sets.create([1]))
    })

    it("should handle partial overlap at end of target", () => {
        const target = Sets.create([1, 2, 3, 4, 5])
        const source = Sets.create([5])
        const result = Sets.intersection(target, source)
        expect(result).toEqual(Sets.create([5]))
    })

    it("should handle partial overlap in middle of target", () => {
        const target = Sets.create([1, 2, 3, 4, 5])
        const source = Sets.create([2, 3])
        const result = Sets.intersection(target, source)
        expect(result).toEqual(Sets.create([2, 3]))
    })

    it("should work with curried form", () => {
        const target = Sets.create([1, 2, 3])
        const source = Sets.create([2, 3, 4])
        const intersect = Sets.intersection(source)
        const result = intersect(target)
        expect(result).toEqual(Sets.create([2, 3]))
    })

    it("should handle string elements", () => {
        const target = Sets.create(["a", "b", "c"])
        const source = Sets.create(["b", "c", "d"])
        const result = Sets.intersection(target, source)
        expect(result).toEqual(Sets.create(["b", "c"]))
    })

    it("should handle object elements", () => {
        const obj1 = { id: 1 }
        const obj2 = { id: 2 }
        const obj3 = { id: 3 }
        const target = Sets.create([obj1, obj2])
        const source = Sets.create([obj2, obj3])
        const result = Sets.intersection(target, source)
        expect(result).toEqual(Sets.create([obj2]))
    })

    it("should handle non-matching element at start triggering result creation", () => {
        const target = Sets.create([1, 2, 3])
        const source = Sets.create([2, 3])
        const result = Sets.intersection(target, source)
        expect(result).toEqual(Sets.create([2, 3]))
    })

    it("should return target unchanged when both sets are empty", () => {
        const target = Sets.create<number>([])
        const source = Sets.create<number>([])
        const result = Sets.intersection(target, source)
        expect(result).toBe(target)
    })

    it("should create new set when target is superset", () => {
        const target = Sets.create([1, 2, 3, 4])
        const source = Sets.create([2, 3])
        const result = Sets.intersection(target, source)
        expect(result).toEqual(Sets.create([2, 3]))
        expect(result).not.toBe(target)
    })

    it("should return target unchanged when sets are equal", () => {
        const target = Sets.create([1, 2, 3])
        const source = Sets.create([1, 2, 3])
        const result = Sets.intersection(target, source)
        expect(result).toBe(target)
    })
})
