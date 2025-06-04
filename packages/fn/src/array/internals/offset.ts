export function resolveOffset(target: ReadonlyArray<unknown>, offset: number): number {
    if (!Number.isSafeInteger(offset)) return -1
    if (offset < 0) return Math.max(target.length + offset, -1)
    return offset >= 0 && offset < target.length ? offset : -1
}
