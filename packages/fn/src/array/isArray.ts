import { dfdlT } from "@monstermann/dfdl"

/**
 * `isArray(value)`
 *
 * Returns `true` if `value` is an array, otherwise returns `false`.
 *
 * ```ts
 */
export const isArray: {
    (): (target: unknown) => target is unknown[]
    (target: unknown): target is unknown[]
} = dfdlT((target: unknown): target is unknown[] => {
    return Array.isArray(target)
}, 1)
