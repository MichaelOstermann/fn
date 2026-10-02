export interface Deferred<T = void> {
    promise: Promise<T>
    reject: (reason: unknown) => void
    resolve: (value: T) => void
}

export function defer<T = void>(): Deferred<T> {
    const deferred = {} as Deferred<T>
    deferred.promise = new Promise((resolve, reject) => {
        deferred.resolve = resolve
        deferred.reject = reject
    })
    return deferred
}
