// What is found in a record is not known to be there.
export type Get<T, K> = K extends keyof T
    ? string extends keyof T ? T[K] | undefined : T[K]
    : undefined
