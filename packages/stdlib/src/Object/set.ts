import { isSame } from "../internals/arrays"

/**
 * # set
 *
 * ```ts
 * Object.set(target, key, value)
 * ```
 *
 * Sets the property `key` of a copy of `target` to `value`.
 * Returns `target` itself when it has that value already.
 *
 * Unlike `Object.merge(target, { [key]: value })`, a `key` that is not known until the code runs is checked.
 *
 * ## Example
 *
 * ```ts
 * Object.set(task, "title", "New"); // { ...task, title: "New" }
 * Object.set(task, key, value);
 * ```
 */
export function set<T extends object, K extends keyof T>(target: T, key: K, value: T[K]): T {
    if (isSame(target[key], value) && key in target) return target
    return { ...target, [key]: value }
}
