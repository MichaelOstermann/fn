export interface ArrayGuard<T, U extends T> {
    (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]): value is U
}

export interface ArrayMap<T, U = T> {
    (value: NoInfer<T>, index: number, target: readonly NoInfer<T>[]): U
}

export type ArrayPredicate<T> = ArrayMap<T, boolean>

export interface OrElse<T, U> {
    (target: readonly NoInfer<T>[]): U
}
