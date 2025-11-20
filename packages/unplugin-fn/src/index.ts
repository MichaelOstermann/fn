import type { Options } from "./types"
import transformMatch from "@monstermann/transform-match"
import transformTreeShake from "@monstermann/tree-shake-import-namespaces"
import { createUnplugin } from "unplugin"
import { createFilter } from "unplugin-utils"

const imports: Record<string, (propertyName: string, importName: string, importAlias: string) => string> = {
    "@monstermann/array/Array": importFactory("array"),
    "@monstermann/dll/Dll": importFactory("dll"),
    "@monstermann/dsp/Dsp": importFactory("dsp"),
    "@monstermann/fn/Array": importFactory("array"),
    "@monstermann/fn/Dll": importFactory("dll"),
    "@monstermann/fn/Dsp": importFactory("dsp"),
    "@monstermann/fn/Map": importFactory("map"),
    "@monstermann/fn/Number": importFactory("number"),
    "@monstermann/fn/Object": importFactory("object"),
    "@monstermann/fn/Promise": importFactory("promise"),
    "@monstermann/fn/Result": importFactory("result"),
    "@monstermann/fn/ResultAsync": importFactory("result"),
    "@monstermann/fn/Set": importFactory("set"),
    "@monstermann/fn/String": importFactory("string"),
    "@monstermann/map/Map": importFactory("map"),
    "@monstermann/number/Number": importFactory("number"),
    "@monstermann/object/Object": importFactory("object"),
    "@monstermann/promise/Promise": importFactory("promise"),
    "@monstermann/result/Result": importFactory("result"),
    "@monstermann/result/ResultAsync": importFactory("result"),
    "@monstermann/set/Set": importFactory("set"),
    "@monstermann/string/String": importFactory("string"),
}

export default createUnplugin<Options>(({ debug, enforce, exclude, include } = {}) => {
    const shouldDebug = debug === undefined
        ? () => false
        : typeof debug === "boolean"
            ? () => debug
            : createFilter(debug)

    return [{
        enforce,
        name: "unplugin-match",
        transform: {
            filter: {
                id: {
                    exclude,
                    include: include || [/\.[jt]sx?$/],
                },
            },
            handler(code, id) {
                return transformMatch(code, id)
            },
        },
    }, {
        enforce,
        name: "unplugin-fn",
        transform: {
            filter: {
                id: {
                    exclude,
                    include: include || [/\.[jt]sx?$/],
                },
            },
            handler(code, id) {
                return transformTreeShake(code, id, {
                    debug: shouldDebug(id),
                    resolve({ importAlias, importName, importPath, propertyName }) {
                        const key = [importPath, importName].join("/")
                        if (key in imports) return imports[key]!(propertyName, importName!, importAlias)
                        return undefined
                    },
                })
            },
        },
    }]
})

function importFactory(pkgName: string) {
    return function (propertyName: string, importName: string, importAlias: string) {
        return `import { ${propertyName} as ${importAlias} } from "@monstermann/${pkgName}/${importName}/${propertyName}.js"`
    }
}
