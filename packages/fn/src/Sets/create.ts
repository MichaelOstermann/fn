/**
 * # create
 *
 * ```ts
 * function Sets.create<T>(
 *     iterable?: Iterable<T> | null | undefined,
 * ): Set<T>
 * ```
 *
 * Creates a new set from an optional iterable.
 *
 * ## Example
 *
 * ```ts
 * import { Sets } from "@monstermann/fn";
 *
 * Sets.create([1, 2, 3]); // Set([1, 2, 3])
 * ```
 *
 */
export function create<T>(iterable?: Iterable<T> | null | undefined): Set<T> {
    return new globalThis.Set(iterable)
}
