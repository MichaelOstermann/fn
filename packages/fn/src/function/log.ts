/**
 * `log(...args)`
 *
 * Logs the provided value along with optional arguments and returns the value unchanged.
 *
 * ```ts
 * log('debug:', 42); // logs "debug: 42", returns 42
 * ```
 *
 * ```ts
 * pipe(42, log("processing:"), (x) => x * 2); // logs "processing: 42", returns 84
 * ```
 */
export function log(...args: any[]) {
    return function <T>(value: T): T {
        // eslint-disable-next-line no-console
        console.log(...args, value)
        return value
    }
}
