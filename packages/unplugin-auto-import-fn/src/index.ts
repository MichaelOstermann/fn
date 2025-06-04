import { named } from "./named"
import { wildcard } from "./wildcard"

const autoImports = {
    array: {
        named: named("array"),
        wildcard: wildcard("array", "A"),
    },
    function: {
        named: named("function"),
        wildcard: wildcard("function", "F"),
    },
    map: {
        named: named("map"),
        wildcard: wildcard("map", "M"),
    },
    number: {
        named: named("number"),
        wildcard: wildcard("number", "N"),
    },
    object: {
        named: named("object"),
        wildcard: wildcard("object", "O"),
    },
    option: {
        named: named("option"),
        wildcard: wildcard("option", "Ot"),
    },
    promise: {
        named: named("promise"),
        wildcard: wildcard("promise", "P"),
    },
    result: {
        named: named("result"),
        wildcard: wildcard("result", "R"),
    },
    set: {
        named: named("set"),
        wildcard: wildcard("set", "St"),
    },
    string: {
        named: named("string"),
        wildcard: wildcard("string", "S"),
    },
    types: {
        named: named("types", true),
    },
}

const recommended = [
    autoImports.types.named(),
    autoImports.function.named(),
    autoImports.array.wildcard(),
    autoImports.map.wildcard(),
    autoImports.number.wildcard(),
    autoImports.object.wildcard(),
    autoImports.option.wildcard(),
    autoImports.promise.wildcard(),
    autoImports.result.wildcard(),
    autoImports.result.named({ include: ["ok", "okP", "err", "errP"] }),
    autoImports.set.wildcard(),
    autoImports.string.wildcard(),
]

export default {
    ...autoImports,
    recommended,
}
