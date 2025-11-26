# fn

**A utility library for TypeScript.**

This package composes several libraries into one:

- [@monstermann/match](https://MichaelOstermann.github.io/match) - Zero-runtime exhaustive pattern matching.
- [@monstermann/dfdl](https://MichaelOstermann.github.io/dfdl) - Data-First / Data-Last oriented utilities.
- [@monstermann/remmi](https://MichaelOstermann.github.io/remmi) - Reverse immer.
- [@monstermann/array](https://MichaelOstermann.github.io/array) - Functional utilities for arrays.
- [@monstermann/function](https://MichaelOstermann.github.io/function) - Functional utilities.
- [@monstermann/geometry](https://MichaelOstermann.github.io/geometry) - Functional geometry utilities.
- [@monstermann/map](https://MichaelOstermann.github.io/map) - Functional utilities for maps.
- [@monstermann/number](https://MichaelOstermann.github.io/number) - Functional utilities for numbers.
- [@monstermann/object](https://MichaelOstermann.github.io/object) - Functional utilities for objects.
- [@monstermann/promise](https://MichaelOstermann.github.io/promise) - Functional utilities for promises.
- [@monstermann/result](https://MichaelOstermann.github.io/result/) - Functional utilities for success | error types.
- [@monstermann/set](https://MichaelOstermann.github.io/set) - Functional utilities for sets.
- [@monstermann/string](https://MichaelOstermann.github.io/string) - Functional utilities for strings.
- [@monstermann/dll](https://MichaelOstermann.github.io/dll) - Functional doubly-linked lists.
- [@monstermann/dsp](https://MichaelOstermann.github.io/dsp) - Small & fast disposables.

## Features

- [Opt-in mutability](#opt-in-mutability)
- [Reference preservation](#reference-preservation)
- [Pipe-friendly](#pipe-friendly)
- [Graceful failure handling](#graceful-failure-handling)
- [Namespaces](#namespaces)
- [Native aliases](#native-aliases)
- [Tree-shaking](#tree-shaking)

### Opt-in mutability

All transforming functions treat data as immutable by default, but additionally feature an implementation that clones data on first write, then mutates.

You can read more about how this works in the documentation for [remmi](https://michaelostermann.github.io/remmi/), which is what is used under the hood here!

<Badge type="danger" text="copy" />
<Badge type="warning" text="mutation" />

::: code-group

```ts [immutable]
const a = [];
const b = Array.append(a, 0); // [!code error]
const c = Array.append(b, 1); // [!code error]
const d = Array.append(c, 2); // [!code error]
```

```ts [mutable]
withMutations(() => {
    const a = [];
    const b = Array.append(a, 0); // [!code error]
    const c = Array.append(b, 1); // [!code warning]
    const d = Array.append(c, 2); // [!code warning]
    return d;
});
```

:::

### Reference preservation

Most transforming functions return the original target when nothing changed.

This is particularly crucial in front-ends, as the primary means to prevent unnecessary and expensive work from happening is to compare state, whether you are using signals with Vue, or React in tandem with the React Compiler.

::: code-group

```ts [merge]
const before = { foo: true, bar: false };
const after = Object.merge(before, { foo: true });
before === after; // true
```

```ts [filter]
const before = [1, 2, 3];
const after = Array.filter(before, (value) => value > 0);
before === after; // true
```

:::

::: details Example implementation

```js
const before = [1, 2, 3];
const after = mapEach(before, (value) => value);
before === after; // true
```

::: code-group

```js [Naive]
// Short and simple, but inefficient:
function mapEach(before, mapper) {
    const after = before.map(mapper);
    return isShallowEqual(before, after) ? before : after;
}
```

```js [@monstermann/fn]
function mapEach(array, mapper) {
    let result;

    for (let i = 0; i < array.length; i++) {
        const prev = array[i];
        const next = mapper(prev, i, array);
        // Skip if nothing changed:
        if (is(prev, next)) continue;
        // Lazily clone the array if we haven't done so already:
        result ??= [...array];
        // Mutate the clone:
        result[i] = next;
    }

    // `result` is undefined if nothing changed:
    return result ?? array;
}
```

:::

### Pipe-friendly

Functions support both "data-first" and "data-last" signatures for seamless use with `pipe` and other methods typically found in functional programming styles.

::: code-group

```ts [data-first]
Array.findRemove([1, 2, 3, 4], (x) => x > 2); // [1, 2, 4]
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    Array.findRemove((x) => x > 2),
); // [1, 2, 4]
```

:::

### Graceful failure handling

Most functions silently ignore potentially failing or ambiguous cases by returning sensible fallback values - no hidden exceptions!

Instead, potentially failing utilities come with `or`, `orElse` and `orThrow` variants:

::: code-group

```ts [default]
Array.first([]); // undefined
String.parseInt("foo"); // NaN
Array.indexOf([0, 1, 2], 3); // -1
```

```ts [or]
Array.firstOr([], 0); // 0
String.parseIntOr("foo", 0); // 0
Array.indexOfOr([0, 1, 2], 3, 0); // 0
```

```ts [orElse]
Array.firstOrElse([], (arr) => arr.length); // 0
String.parseIntOrElse("foo", (str) => str.length); // 3
Array.indexOfOrElse([0, 1, 2], 3, (arr) => arr.length); // 3
```

```ts [orThrow]
Array.firstOrThrow([]); // Throws FnError
String.parseIntOrThrow("foo"); // Throws FnError
Array.indexOfOrThrow([0, 1, 2], 3); // Throws FnError
```

:::

### Namespaces

This library primarily exports namespaces, for example:

```ts
import { Object } from "@monstermann/fn/object";

Object.merge(a, b);
```

#### In-editor discovery

With namespaces, you can easily discover what is available, without having to constantly pull up the documentation and memorize all the function names:

```ts
import { Array } from "@monstermann/fn";

 Array.|
//     ^ Your editor will show everything that is available!
```

#### Consistent naming

Usually utility libraries not designed around with namespaces struggle with naming things.

The function `drop(target, amount)` could support both arrays and strings for example, however you are forced to come up with a unique and semantically meaningful name for each possibility.

So the bigger a utility becomes, the more difficult it is to maintain it. Using namespaces allows us to keep things simple:

::: code-group

```ts [Global functions]
import { drop, sliceFrom } from "…";

drop([1, 2, 3], 2); // [3]
sliceFrom("Hello World!", 6); // "World!"
```

```ts [Namespaces]
import { Array, String } from "@monstermann/fn";

Array.drop([1, 2, 3], 2); // [3]
String.drop("Hello World!", 6); // "World!"
```

:::

#### Type hints

In long and complex pipelines, it can sometimes be difficult to maintain a mental model of what data is flowing through, especially when you are not yet familiar with every single function.

While you could hover all parts in your editor to read the type signatures, namespaces based on types can give you a decent glance of what is happening:

::: code-group

```ts [Global functions]
pipe(
    ["foo", "bar", "baz"],
    mapEach(parseInt()),
    mapEach(toString()),
    mapEach(dropLast(1)),
    join(""),
    pascalCase(),
    append(" Batman!"),
); //=> Nanana Batman!
```

```ts [Namespaces]
pipe(
    ["foo", "bar", "baz"],
    Array.mapEach(String.parseInt()),
    Array.mapEach(Number.toString()),
    Array.mapEach(String.dropLast(1)),
    Array.join(""),
    String.pascalCase(),
    String.append(" Batman!"),
); //=> Nanana Batman!
```

:::

### Native aliases

This library comes with additional aliases for most natively available methods, sometimes with more convenient type definitions.

This can prevent having to memorize what is natively available and what is available as an external utility.

::: code-group

```ts [data-first]
"Hello World!".indexOf("W"); // 6
String.indexOf("Hello World!", "W"); // 6
```

```ts [data-last]
pipe("Hello World!", (str) => str.indexOf("W")); // 6
pipe("Hello World!", String.indexOf("W")); // 6
```

:::

## Installation

::: code-group

```sh [npm]
npm install @monstermann/fn
```

```sh [pnpm]
pnpm add @monstermann/fn
```

```sh [yarn]
yarn add @monstermann/fn
```

```sh [bun]
bun add @monstermann/fn
```

:::

## Tree-shaking

### Installation

::: code-group

```sh [npm]
npm install -D @monstermann/unplugin-fn
```

```sh [pnpm]
pnpm -D add @monstermann/unplugin-fn
```

```sh [yarn]
yarn -D add @monstermann/unplugin-fn
```

```sh [bun]
bun -D add @monstermann/unplugin-fn
```

:::

### Usage

::: code-group

```ts [Vite]
// vite.config.ts
import fn from "@monstermann/unplugin-fn/vite";

export default defineConfig({
    plugins: [fn()],
});
```

```ts [Rollup]
// rollup.config.js
import fn from "@monstermann/unplugin-fn/rollup";

export default {
    plugins: [fn()],
};
```

```ts [Rolldown]
// rolldown.config.js
import fn from "@monstermann/unplugin-fn/rolldown";

export default {
    plugins: [fn()],
};
```

```ts [Webpack]
// webpack.config.js
const fn = require("@monstermann/unplugin-fn/webpack");

module.exports = {
    plugins: [fn()],
};
```

```ts [Rspack]
// rspack.config.js
const fn = require("@monstermann/unplugin-fn/rspack");

module.exports = {
    plugins: [fn()],
};
```

```ts [ESBuild]
// esbuild.config.js
import { build } from "esbuild";
import fn from "@monstermann/unplugin-fn/esbuild";

build({
    plugins: [fn()],
});
```

:::

## Credits

- [gustavoguichard/string-ts](https://github.com/gustavoguichard/string-ts)
- [Remeda](https://github.com/remeda/remeda)
- [Effect](https://github.com/Effect-TS/effect)
