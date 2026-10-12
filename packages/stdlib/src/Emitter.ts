/* eslint-disable @typescript-eslint/no-redeclare -- Emitter and AsyncEmitter are a type and what creates it */

type AnyFn = (...args: any[]) => any

export interface Listener<T> {
    (message: T): void
}

export interface AsyncListener<T> {
    (message: T): Promise<void> | void
}

/** An emitter that can only be listened to. */
export interface ReadonlyEmitter<T = void> {
    /** Adds a listener, and returns a function that removes it again. */
    (listener: Listener<T>): () => void
}

/** An emitter that waits for its listeners, and can only be listened to. */
export interface ReadonlyAsyncEmitter<T = void> {
    /** Adds a listener, and returns a function that removes it again. */
    (listener: AsyncListener<T>): () => void
}

/** A single event: call it with a function to listen, and with anything else to tell the listeners about it. */
export interface Emitter<T = void> extends ReadonlyEmitter<T> {
    /** Calls every listener with `message`, in the order they were added. */
    (message: T): void
    /** Removes all listeners. */
    readonly listeners: Set<Listener<T>>
    clear: () => void
}

/** A single event that waits for its listeners: call it with a function to listen, and with anything else to tell the listeners about it. */
export interface AsyncEmitter<T = void> extends ReadonlyAsyncEmitter<T> {
    /** Calls every listener with `message`, one after the other, and resolves once the last one is done. */
    (message: T): Promise<void>
    /** Removes all listeners. */
    readonly listeners: Set<AsyncListener<T>>
    clear: () => void
}

/**
 * `Emitter<T>(dispatch?)`
 *
 * Creates a single event. What it is called with tells what happens: a function is added as a listener, anything else is a message for the listeners.
 * A function can therefore not be a message.
 *
 * - listeners are kept in a `Set`: the same function counts once, and one that is added while a message is sent is called as well
 * - `dispatch` replaces how listeners are called, to wrap it or to catch what they throw
 *
 * ```ts
 * const onMessage = Emitter<string>();
 *
 * const remove = onMessage((message) => console.log(message));
 * onMessage("hello"); // "hello"
 * remove();
 *
 * onMessage.listeners.size; // 0
 * onMessage.clear();
 *
 * // What is exposed can be limited to listening.
 * const onChange: ReadonlyEmitter<string> = onMessage;
 * ```
 */
export function Emitter<T = void>(dispatch?: (listeners: Set<Listener<T>>, message: T) => void): [T] extends [AnyFn] ? never : Emitter<T> {
    const listeners = new Set<Listener<T>>()

    const emitter = (input: Listener<T> | T): unknown => {
        if (typeof input === "function") return listen(listeners, input as Listener<T>)
        if (dispatch) return dispatch(listeners, input)
        for (const listener of listeners) listener(input)
        return undefined
    }

    emitter.listeners = listeners
    emitter.clear = () => listeners.clear()
    return emitter as never
}

/**
 * `AsyncEmitter<T>(dispatch?)`
 *
 * Creates a single event like `Emitter`, whose listeners can take their time: they are called one after the other, each one once the one before is done, and sending a message returns a promise of all of them being done.
 *
 * It rejects with what a listener throws, the ones after it are not called.
 *
 * ```ts
 * const onShutdown = AsyncEmitter<string>();
 *
 * onShutdown(async (reason) => await database.close());
 * onShutdown(async (reason) => await server.stop());
 *
 * await onShutdown("SIGTERM");
 * ```
 */
export function AsyncEmitter<T = void>(dispatch?: (listeners: Set<AsyncListener<T>>, message: T) => Promise<void>): [T] extends [AnyFn] ? never : AsyncEmitter<T> {
    const listeners = new Set<AsyncListener<T>>()

    const emitter = (input: AsyncListener<T> | T): unknown => {
        if (typeof input === "function") return listen(listeners, input as AsyncListener<T>)
        if (dispatch) return dispatch(listeners, input)
        return send(listeners, input)
    }

    emitter.listeners = listeners
    emitter.clear = () => listeners.clear()
    return emitter as never
}

function listen<T>(listeners: Set<T>, listener: T): () => void {
    listeners.add(listener)
    return () => void listeners.delete(listener)
}

async function send<T>(listeners: Set<AsyncListener<T>>, message: T): Promise<void> {
    for (const listener of listeners) await listener(message)
}
