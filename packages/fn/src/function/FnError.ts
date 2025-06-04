/**
 * `FnError(message, args)`
 *
 * A custom error class that extends the standard Error class with additional argument storage.
 *
 * This is the exception that gets thrown in `xOrThrow` utilities.
 *
 * ```ts
 * const error = new FnError("Something went wrong", [1, 2, 3]);
 * console.log(error.message); // "Something went wrong"
 */
export class FnError extends Error {
    args: unknown[]
    constructor(message: string, args: unknown[]) {
        super(message)
        this.args = args
    }
}
