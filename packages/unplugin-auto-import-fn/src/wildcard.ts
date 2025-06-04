import type { Category, Wildcard } from "./types"

export function wildcard<T extends Category>(category: T, defaultName: string): Wildcard {
    return function (name) {
        return {
            [`@monstermann/fn/${category}`]: [["*", name || defaultName]],
        }
    }
}
