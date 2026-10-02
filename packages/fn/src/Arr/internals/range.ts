type Range = number[]

export function createRange(): Range {
    return []
}

export function hasRange(range: Range): boolean {
    return range.length > 0
}

export function addRange(range: Range, idx: number): void {
    let i = range.length
    while (i--) {
        const v = range[i]!
        if (v === idx) return
        if (v < idx) {
            range.splice(i + 1, 0, idx)
            return
        }
    }
    range.unshift(idx)
}

export function spliceRange<T>(target: T[], range: Range): void {
    let i = range.length
    while (i--) {
        let start = range[i]!
        let len = 1
        while (range[i - 1] === start - 1) {
            start--
            len++
            i--
        }
        target.splice(start, len)
    }
}
