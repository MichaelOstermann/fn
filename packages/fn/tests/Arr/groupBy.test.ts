import { describe, expect, it } from "bun:test"
import { Arr } from "../../src/Arr/index"

const items = [{ k: "a", v: 1 }, { k: "b", v: 2 }, { k: "a", v: 3 }]

describe("Arr.groupBy", () => {
    it("should group by key", () => {
        expect(Arr.groupBy(items, item => item.k)).toEqual({ a: [items[0]!, items[2]!], b: [items[1]!] })
        expect(Arr.groupBy(items, item => item.k, item => item.v)).toEqual({ a: [1, 3], b: [2] })
    })

    it("should group by names that objects inherit", () => {
        const names = [{ k: "constructor" }, { k: "toString" }, { k: "constructor" }, { k: "__proto__" }]
        const result = Arr.groupBy(names, item => item.k)
        expect(Object.keys(result)).toEqual(["constructor", "toString", "__proto__"])
        expect<unknown>(result.constructor).toEqual([names[0]!, names[2]!])
        expect(Object.getOwnPropertyDescriptor(result, "__proto__")?.value).toEqual([names[3]!])
        expect(Object.getPrototypeOf(result)).toBe(Object.prototype)
    })
})

describe("Arr.indexBy", () => {
    it("should index by key, the last one wins", () => {
        expect(Arr.indexBy(items, item => item.k)).toEqual({ a: items[2]!, b: items[1]! })
        expect(Arr.indexBy(items, item => item.k, item => item.v)).toEqual({ a: 3, b: 2 })
    })

    it("should index by names that objects inherit", () => {
        const names = [{ k: "constructor" }, { k: "__proto__" }]
        const result = Arr.indexBy(names, item => item.k)
        expect(Object.keys(result)).toEqual(["constructor", "__proto__"])
        expect(Object.getOwnPropertyDescriptor(result, "__proto__")?.value).toBe(names[1])
        expect(Object.getPrototypeOf(result)).toBe(Object.prototype)
    })
})
