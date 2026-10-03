/** Indices to remove, in ascending order. */
type Range = number[]

export function createRange(): Range {
    return []
}

export function hasRange(range: Range): boolean {
    return range.length > 0
}

/** Indices have to be added in ascending order. */
export function addRange(range: Range, idx: number): void {
    range.push(idx)
}

/** Removes the indices in a single pass, moving what stays to the front. */
export function spliceRange<T>(target: T[], range: Range): void {
    const length = target.length
    let write = range[0]!
    let next = 1

    for (let read = write + 1; read < length; read++) {
        if (read === range[next]) {
            next++
            continue
        }
        // Holes stay holes, as they do with splice.
        if (read in target) target[write] = target[read]!
        else delete target[write]
        write++
    }

    target.length = write
}
