export interface Dll<T> {
    head: DllLink<T> | undefined
    size: number
    tail: DllLink<T> | undefined
}

export interface DllLink<T> {
    next: DllLink<T> | undefined
    prev: DllLink<T> | undefined
    value: T
}
