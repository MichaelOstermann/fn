import type { Category, Filter, Modules, Named } from "./types"
import { modules } from "./modules"

function shouldInclude<T extends Category>(name: Modules[T][number], include: Filter<T> | undefined): boolean {
    if (!include) return true
    if (Array.isArray(include)) return include.includes(name)
    if (typeof include === "function") return include(name)
    return include.test(name)
}

function shouldExclude<T extends Category>(name: Modules[T][number], exclude: Filter<T> | undefined): boolean {
    if (!exclude) return false
    if (Array.isArray(exclude)) return exclude.includes(name)
    if (typeof exclude === "function") return exclude(name)
    return exclude.test(name)
}

export function named<T extends Category>(category: T, type: boolean = false): Named<T> {
    return function (options) {
        const imports: ([string] | [string, string])[] = []

        for (const name of modules[category]) {
            if (!shouldInclude(name, options?.include)) continue
            if (shouldExclude(name, options?.exclude)) continue
            const alias = (options?.aliases as any)?.[name] || name
            if (alias === name) imports.push([name])
            else imports.push([name, alias])
        }

        return {
            from: `@monstermann/fn/${category}`,
            imports,
            type,
        }
    }
}
