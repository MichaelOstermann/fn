<div align="center">

<h1>fn-transform</h1>

**Makes using `@monstermann/fn` free.**

</div>

Before:

```ts
import { Arr, match, pipe } from "@monstermann/fn";

const result = pipe(
    values,
    Arr.mapEach((value) => match(value).case(1, "one").or("other")),
    Arr.at(0),
);
```

After:

```ts
import { pipe } from "@monstermann/fn/pipe.mjs";
import { mapEach as _mapEach } from "@monstermann/fn/Arr/mapEach.mjs";
import { at as _at } from "@monstermann/fn/Arr/at.mjs";

const result = pipe(
    values,
    _mapEach((value) => (value === 1 ? "one" : "other")),
    _at(0),
);
```

- Members of namespaces (`Arr.at`) become direct imports.
- `match` chains are compiled into conditional expressions.
- Everything else (`pipe`, `withMutations`, …) is imported from the file it lives in.

Nothing imports the entry of `@monstermann/fn` afterwards, so a bundle only contains what is used, without relying on what the bundler is able to tree-shake.

## Installation

```sh
bun add -D @monstermann/fn-transform
```

## Usage

### Vite, Rolldown, tsdown

```ts
import { fn } from "@monstermann/fn-transform";

export default defineConfig({
    plugins: [fn({ enforce: "pre" })],
});
```

| Option    | Default        | Description                                                            |
| --------- | -------------- | ---------------------------------------------------------------------- |
| `include` | `/\.[jt]sx?$/` | RegExp(s), only files whose path matches are transformed.              |
| `exclude` |                | RegExp(s), files whose path matches are skipped.                       |
| `enforce` |                | `"pre"` or `"post"`.                                                   |
| `debug`   | `false`        | `true` or a RegExp matching file paths, prints what is being replaced. |

### Bun

`Bun.build` only uses the first `onLoad` that returns something, so call `transform` from your own:

```ts
import { transform } from "@monstermann/fn-transform";

await Bun.build({
    entrypoints: ["./src/index.ts"],
    plugins: [
        {
            name: "transforms",
            setup(build) {
                build.onLoad(
                    { filter: /\.tsx?$/ },
                    async ({ loader, path }) => {
                        const code = await Bun.file(path).text();
                        return {
                            contents: transform(code, path)?.code ?? code,
                            loader,
                        };
                    },
                );
            },
        },
    ],
});
```

## Details

- Files that do not mention `@monstermann/fn` are skipped without being parsed.
- A namespace that is used as a value (`call(Arr)`) is imported as a whole, from its own file.
- `match` is only compiled when it has been imported from `@monstermann/fn`, renamed imports are followed. A chain needs to end with `or`, `orElse` or `orThrow`.
- A compiled chain only evaluates the result of the branch that matches. Without the transform every argument is evaluated: `match(value).case(1, a()).or(b())` calls both `a` and `b`, compiled it calls one of them.
- Callbacks are inlined where that does not change what they do (`v => v + 1` becomes `value + 1`), and called as they are otherwise: async callbacks, functions, and callbacks that assign to their parameter.
- `import * as Fn from "@monstermann/fn"` is left alone.
