export interface MapGuard<K, V, U extends V> {
    (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>): value is U
}

export interface MapMap<K, V, U = V> {
    (value: NoInfer<V>, key: NoInfer<K>, target: ReadonlyMap<K, V>): U
}

export type MapPredicate<K, V> = MapMap<K, V, boolean>

export interface OrElse<K, V, U> {
    (target: ReadonlyMap<K, V>): U
}
