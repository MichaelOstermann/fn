import { describe, expect, it } from "bun:test"
import { Dll } from "../../src/Dll/index"

describe("Dll.unlink", () => {
    it("should remove links", () => {
        const dll = Dll.create<number>()
        const a = Dll.append(dll, 1)
        const b = Dll.append(dll, 2)
        const c = Dll.append(dll, 3)

        Dll.unlink(dll, b)
        expect(Dll.toArray(dll)).toEqual([1, 3])
        expect(dll.size).toBe(2)

        Dll.unlink(dll, a)
        Dll.unlink(dll, c)
        expect(Dll.toArray(dll)).toEqual([])
        expect(dll.size).toBe(0)
        expect(dll.head).toBe(undefined)
        expect(dll.tail).toBe(undefined)
    })

    it("should ignore links that have been unlinked already", () => {
        const dll = Dll.create<number>()
        const a = Dll.append(dll, 1)
        const b = Dll.append(dll, 2)
        const c = Dll.append(dll, 3)

        for (const link of [b, b, a, a, c, c]) Dll.unlink(dll, link)
        expect(dll.size).toBe(0)

        const d = Dll.append(dll, 4)
        Dll.unlink(dll, b)
        expect(Dll.toArray(dll)).toEqual([4])
        expect(dll.head).toBe(d)
        expect(dll.size).toBe(1)
    })

    it("should not interrupt iterations", () => {
        const dll = Dll.create<number>()
        const links = [1, 2, 3].map(value => Dll.append(dll, value))
        const seen: number[] = []

        Dll.forEach(dll, (value, link) => {
            seen.push(value)
            Dll.unlink(dll, link)
        })

        expect(seen).toEqual([1, 2, 3])
        expect(dll.size).toBe(0)
        expect(links.length).toBe(3)
    })
})
