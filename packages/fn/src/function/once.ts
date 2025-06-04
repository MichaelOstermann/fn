/**
 * `once(fn)`
 *
 * Creates a function that executes only once and caches the result for subsequent calls.
 *
 * ```ts
 * const expensive = once(() => {
 *     console.log("Computing...");
 *     return 42;
 * });
 *
 * expensive(); // logs "Computing..." and returns 42
 */
export function once<T>(fn: () => T): () => T {
    let called = false
    let ret: T
    return () => {
        if (!called) {
            ret = fn()
            called = true
        }
        return ret
    }
}
