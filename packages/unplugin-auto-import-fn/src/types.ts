import type { modules } from "./modules"

export type Modules = typeof modules
export type Category = keyof Modules

export interface Wildcard {
    (name?: string): Record<string, [string, string][]>
}

export interface Named<T extends Category> {
    (options?: { aliases?: Aliases<T>, exclude?: Filter<T>, include?: Filter<T> }): {
        from: string
        imports: ([string] | [string, string])[]
        type: boolean
    }
}

export type Aliases<T extends Category> = Partial<Record<Modules[T][number], string>>

export type Filter<T extends Category> =
    | Modules[T][number][]
    | RegExp
    | ((name: Modules[T][number]) => boolean)
