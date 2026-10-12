import { describe, expect, it } from "bun:test"
import { Bytes } from "../../src/Bytes/index"

describe("Bytes", () => {
    it("should have units that count in thousands, and ones that count in 1024s", () => {
        expect(Bytes.KB).toBe(1000)
        expect(Bytes.MB).toBe(1000 ** 2)
        expect(Bytes.GB).toBe(1000 ** 3)
        expect(Bytes.TB).toBe(1000 ** 4)
        expect(Bytes.KiB).toBe(1024)
        expect(Bytes.MiB).toBe(1024 ** 2)
        expect(Bytes.GiB).toBe(1024 ** 3)
        expect(Bytes.TiB).toBe(1024 ** 4)
    })

    describe("parse", () => {
        it("should parse a number with a unit", () => {
            expect(Bytes.parse("512B")).toBe(512)
            expect(Bytes.parse("64kb")).toBe(64_000)
            expect(Bytes.parse("128MB")).toBe(128_000_000)
            expect(Bytes.parse("1.5 GB")).toBe(1_500_000_000)
            expect(Bytes.parse(" 2tb ")).toBe(2_000_000_000_000)
            expect(Bytes.parse("64KiB")).toBe(65_536)
            expect(Bytes.parse("128mib")).toBe(134_217_728)
            expect(Bytes.parse("1GiB")).toBe(1_073_741_824)
            expect(Bytes.parse("1TiB")).toBe(1_099_511_627_776)
            expect(Bytes.parse("0.5b")).toBe(1)
        })

        it("should return undefined for everything else", () => {
            for (const input of ["", "128", "mb", "-1mb", "1e3b", "1 megabyte", "1ib", "1bib", "1pb", "1k"]) {
                expect(Bytes.parse(input)).toBeUndefined()
            }
        })
    })

    describe("format", () => {
        it("should count in thousands", () => {
            expect(Bytes.format(0, { locales: "en" })).toBe("0 B")
            expect(Bytes.format(512, { locales: "en" })).toBe("512 B")
            expect(Bytes.format(999, { locales: "en" })).toBe("999 B")
            expect(Bytes.format(1000, { locales: "en" })).toBe("1 kB")
            expect(Bytes.format(1500, { locales: "en" })).toBe("1.5 kB")
            expect(Bytes.format(128 * Bytes.MB, { locales: "en" })).toBe("128 MB")
            expect(Bytes.format(2.5 * Bytes.GB, { locales: "en" })).toBe("2.5 GB")
            expect(Bytes.format(Bytes.TB, { locales: "en" })).toBe("1 TB")
            expect(Bytes.format(1e21, { locales: "en" })).toBe("1,000,000 PB")
        })

        it("should count in 1024s", () => {
            expect(Bytes.format(1000, { binary: true, locales: "en" })).toBe("1,000 B")
            expect(Bytes.format(1536, { binary: true, locales: "en" })).toBe("1.5 KiB")
            expect(Bytes.format(128 * Bytes.MiB, { binary: true, locales: "en" })).toBe("128 MiB")
            expect(Bytes.format(Bytes.TiB, { binary: true, locales: "en" })).toBe("1 TiB")
        })

        it("should write the number as asked", () => {
            expect(Bytes.format(1_234_567, { locales: "de", maximumFractionDigits: 2 })).toBe("1,23 MB")
            expect(Bytes.format(1_234_567, { locales: "en", maximumFractionDigits: 0 })).toBe("1 MB")
        })

        it("should write what is negative", () => {
            expect(Bytes.format(-1500, { locales: "en" })).toBe("-1.5 kB")
        })

        it("should work without options", () => {
            expect(Bytes.format(2000)).toBe(`${new Intl.NumberFormat().format(2)} kB`)
        })
    })
})
