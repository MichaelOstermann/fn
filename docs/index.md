# fn

**A utility library for TypeScript.**

## Features

- [Opt-in mutability](#opt-in-mutability)
- [Reference preservation](#reference-preservation)
- [Pipe-friendly](#pipe-friendly)
- [Graceful failure handling](#graceful-failure-handling)
- [Namespaces](#namespaces)
- [Native aliases](#native-aliases)
- [Option & Result](#option-result)

### Opt-in mutability

All transforming functions treat data as immutable by default, but additionally feature an implementation that clones data on first write, then mutates.

You can read more about how this works in the documentation for [remmi](https://michaelostermann.github.io/remmi/), which is what is used under the hood here!

<Badge type="danger" text="copy" />
<Badge type="warning" text="mutation" />

::: code-group

```ts [immutable]
const a = [];
const b = append(a, 0); // [!code error]
const c = append(b, 1); // [!code error]
const d = append(c, 2); // [!code error]
```

```ts [mutable]
withMutations(() => {
    const a = [];
    const b = append(a, 0); // [!code error]
    const c = append(b, 1); // [!code warning]
    const d = append(c, 2); // [!code warning]
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
const after = merge(before, { foo: true });
before === after; // true
```

```ts [filter]
const before = [1, 2, 3];
const after = filter(before, (value) => value > 0);
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
findRemove([1, 2, 3, 4], (x) => x > 2); // [1, 2, 4]
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    findRemove((x) => x > 2),
); // [1, 2, 4]
```

:::

### Graceful failure handling

Most functions silently ignore potentially failing or ambiguous cases by returning sensible fallback values - no hidden exceptions!

Instead, potentially failing utilities come with `or`, `orElse` and `orThrow` variants:

::: code-group

```ts [default]
first([]); // undefined
parseInt("foo"); // NaN
indexOf([0, 1, 2], 3); // -1
```

```ts [or]
firstOr([], 0); // 0
parseIntOr("foo", 0); // 0
indexOfOr([0, 1, 2], 3, 0); // 0
```

```ts [orElse]
firstOrElse([], (arr) => arr.length); // 0
parseIntOrElse("foo", (str) => str.length); // 3
indexOfOrElse([0, 1, 2], 3, (arr) => arr.length); // 3
```

```ts [orThrow]
firstOrThrow([]); // Throws FnError
parseIntOrThrow("foo"); // Throws FnError
indexOfOrThrow([0, 1, 2], 3); // Throws FnError
```

:::

### Namespaces

This library is primarily intended to be used with wildcard imports:

```ts
import * as O from "@monstermann/fn/object";

O.merge(a, b);
```

#### In-editor discovery

With namespaces, you can easily discover what is available, without having to constantly pull up the documentation and memorize all the function names:

```ts
import * as A from "@monstermann/fn/array";

 A.|
// ^ Your editor will show everything that is available!
```

#### Consistent naming

Usually utility libraries not designed around with namespaces struggle with naming things.

The function `drop(target, amount)` could support both arrays and strings for example, however you are forced to come up with a unique and semantically meaningful name for each possibility.

So the bigger a utility becomes, the more difficult it is to maintain it. Using namespaces allows us to keep things simple:

::: code-group

```ts [Named imports]
import { drop, sliceFrom } from "…";

drop([1, 2, 3], 2); // [3]
sliceFrom("Hello World!", 6); // "World!"
```

```ts [Wildcard imports]
import * as A from "@monstermann/fn/array";
import * as S from "@monstermann/fn/string";

A.drop([1, 2, 3], 2); // [3]
S.drop("Hello World!", 6); // "World!"
```

:::

#### Type hints

In long and complex pipelines, it can sometimes be difficult to maintain a mental model of what data is flowing through, especially when you are not yet familiar with every single function.

While you could hover all parts in your editor to read the type signatures, namespaces based on types can give you a decent glance of what is happening:

`A`rray, `S`tring, `N`umber

::: code-group

```ts [Named imports]
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

```ts [Wildcard imports]
pipe(
    ["foo", "bar", "baz"],
    A.mapEach(S.parseInt()),
    A.mapEach(N.toString()),
    A.mapEach(S.dropLast(1)),
    A.join(""),
    S.pascalCase(),
    S.append(" Batman!"),
); //=> Nanana Batman!
```

:::

#### Tree-shakeable

Flat imports historically featured good support for tree-shaking, however these days popular bundlers typically can tree-shake more scenarios!

::: code-group

```ts [Source]
import * as A from "@monstermann/fn/array";

A.drop([1, 2, 3], 2); // [3]
```

```ts [ESBuild]
"use strict";
(() => {
    // node_modules/@monstermann/fn/array/drop.ts
    var drop = …;

    // source.js
    drop([1, 2, 3], 2);
})();
```

:::

### Native aliases

This library comes with additional aliases for most natively available methods, sometimes with more convenient type definitions.

This can prevent having to memorize what is natively available and what is available as an external utility.

::: code-group

```ts [data-first]
"Hello World!".indexOf("W"); // 6
S.indexOf("Hello World!", "W"); // 6
```

```ts [data-last]
pipe("Hello World!", (str) => str.indexOf("W")); // 6
pipe("Hello World!", S.indexOf("W")); // 6
```

:::

### Option & Result

This library comes with a very simple take on `Option` and `Result` utilities that can sometimes come in clutch:

::: code-group

<!-- prettier-ignore -->
```ts [Option]
const it = null as number | null | undefined

or(it, 10); // 10
orElse(it, () => 10); // 10
orThrow(it); // throws FnError

map(it, (x) => x * 2); // null
mapOr(it, (x) => x * 2, 0); // 0
mapOrElse(it, (x) => x * 2, () => 0); // 0
```

```ts [Result]
// { ok: false, error: "Error!" }
const error = err("Error!");

okOr(error, true); // true
okOrElse(error, (error) => true); // true
okOrThrow(error); // Throws "Error!"

// { ok: true, value: 0 }
const success = ok(0);

mapOk(success, (num) => num + 1); // ok(1)
mapErr(success, (num) => num + 1); // ok(0)
```

```ts [Result (Async)]
// Promise<{ ok: false, error: "Error!" }>
const error = errP("Error!");

okOr(error, true); // Promise<true>
okOrElse(error, (error) => true); // Promise<true>
okOrThrow(error); // Throws "Error!"

// Promise<{ ok: true, value: 0 }>
const success = okP(0);

mapOk(success, (num) => num + 1); // okP(1)
mapErr(success, (num) => num + 1); // okP(0)
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

## unplugin-auto-import-fn

One major downside of wildcard (or default) imports is that editors can not easily autocomplete them, contrary to named imports.

To alleviate this, there is an optional preset available for [`unplugin-auto-import`](https://github.com/unplugin/unplugin-auto-import) that allows your bundler to automatically add the necessary imports based on your usage, without polluting the global namespace with too many identifiers:

::: code-group

```ts [Source]
// No imports necessary:
A.drop([1, 2, 3], 2);
```

```ts [Transformed]
// unplugin-auto-import will automatically add this:
import * as A from "@monstermann/fn/array";

A.drop([1, 2, 3], 2);
```

```ts [Build]
// Tree-shaken build from common bundlers:
"use strict";
(() => {
    // node_modules/@monstermann/fn/array/drop.ts
    var drop = …;

    // source.js
    drop([1, 2, 3], 2);
})();
```

:::

### Installation

::: code-group

```sh [npm]
npm install -D unplugin-auto-import @monstermann/unplugin-auto-import-fn
```

```sh [pnpm]
pnpm add -D unplugin-auto-import @monstermann/unplugin-auto-import-fn
```

```sh [yarn]
yarn add -D unplugin-auto-import @monstermann/unplugin-auto-import-fn
```

```sh [bun]
bun add -D unplugin-auto-import @monstermann/unplugin-auto-import-fn
```

:::

### Usage

Please consult the documentation for [`unplugin-auto-import`](https://github.com/unplugin/unplugin-auto-import) on how to set this up for other bundlers!

::: code-group

```ts [vite.config.ts + Recommended]
import AutoImport from "unplugin-auto-import/vite";
import Fn from "@monstermann/unplugin-auto-import-fn";

export default defineConfig({
    plugins: [
        AutoImport({
            dts: true,
            imports: Fn.recommended, // [!code highlight]
        }),
    ],
});
```

<!-- prettier-ignore -->
```ts [vite.config.ts + Custom]
import AutoImport from "unplugin-auto-import/vite";
import Fn from "@monstermann/unplugin-auto-import-fn";

export default defineConfig({
    plugins: [
        AutoImport({
            dts: true,
            imports: [
                Fn.array.wildcard("Arr"), // [!code highlight]
                Fn.number.wildcard("Num"), // [!code highlight]
            ],
        }),
    ],
});
```

:::

### Recommended preset

```ts
import Fn from "@monstermann/unplugin-auto-import-fn";

Fn.recommended;

// Equivalent to this setup:

Fn.array.wildcard("A");
Fn.map.wildcard("M");
Fn.number.wildcard("N");
Fn.object.wildcard("O");
Fn.option.wildcard("Ot");
Fn.promise.wildcard("P");
Fn.result.wildcard("R");
Fn.set.wildcard("St");
Fn.string.wildcard("S");

Fn.result.named({ include: ["ok", "okP", "err", "errP"] });
Fn.function.named();

// Resulting with:

import * as A from "@monstermann/fn/array";
import * as M from "@monstermann/fn/map";
import * as N from "@monstermann/fn/number";
import * as O from "@monstermann/fn/object";
import * as Ot from "@monstermann/fn/option";
import * as P from "@monstermann/fn/promise";
import * as R from "@monstermann/fn/result";
import * as St from "@monstermann/fn/set";
import * as S from "@monstermann/fn/string";

import { ok, err, … } from "@monstermann/fn/result";
import { pipe, when, noop, … } from "@monstermann/fn/function";
```

### Customization

If the default preset is not to your liking, for example if you would like to change the aliases, or only use select functions, you can create your own setup:

```ts
import Fn from "@monstermann/unplugin-auto-import-fn";

// Import as wildcard:
Fn.array.wildcard("A");

// Enable all modules as named imports:
Fn.array.named();

// Include only specific named imports:
Fn.array.named({ include: ["findMap"] });
Fn.array.named({ include: /^find/ });
Fn.array.named({ include: (name) => name.startsWith("find") });

// Exclude specific named imports:
Fn.array.named({ exclude: ["findMap"] });
Fn.array.named({ exclude: /^find/ });
Fn.array.named({ exclude: (name) => name.startsWith("find") });

// Alias named imports:
Fn.array.named({ aliases: { append: "push" } });
```
