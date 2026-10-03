/** Reads a property of a record, ignoring what it inherits: `constructor`, `toString`, … */
export function getOwn<T>(target: Record<PropertyKey, T>, key: PropertyKey): T | undefined {
    return Object.hasOwn(target, key) ? target[key] : undefined
}

/** Sets a property of a record, also when assigning to it would do something else: `__proto__` */
export function setOwn<T>(target: Record<PropertyKey, T>, key: PropertyKey, value: T): void {
    if (key === "__proto__") Object.defineProperty(target, key, { configurable: true, enumerable: true, value, writable: true })
    else target[key] = value
}
