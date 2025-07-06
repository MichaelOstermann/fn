import { dfdlT } from "@monstermann/dfdl"

type AnyFn = (...args: any[]) => any

type MethodsOf<T> = keyof {
    [K in keyof T as T[K] extends AnyFn ? K : never]: any
}

/**
 * `invoke(method, args)`
 *
 * Invokes a method on an object with the provided arguments.
 *
 * ```ts
 * invoke("Hello World", "split", [" "]); // ["Hello", "World"]
 * ```
 *
 * ```ts
 * pipe("Hello World", invoke("split", [" "])); // ["Hello", "World"]
 * ```
 */
export const invoke: {
    <T, K extends MethodsOf<T>>(method: K, args: T[K] extends AnyFn ? Parameters<T[K]> : never): (target: T) => T[K] extends AnyFn ? ReturnType<T[K]> : never
    <T, K extends MethodsOf<T>>(target: T, method: K, args: T[K] extends AnyFn ? Parameters<T[K]> : never): T[K] extends AnyFn ? ReturnType<T[K]> : never
} = dfdlT(<T, K extends MethodsOf<T>>(target: T, method: K, args: T[K] extends AnyFn ? Parameters<T[K]> : never): T[K] extends AnyFn ? ReturnType<T[K]> : never => {
    return (target as any)[method](...args)
}, 3)
