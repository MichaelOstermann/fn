### dfdl

- `dfdl(fn, arity?: boolean)`
- `dfdl(fn, isDataFirst: (args: IArguments) => boolean)`

Creates a function that can be used in both data-first and data-last styles. Types are automatically inferred from the input function.

::: code-group

```ts [Example]
import { dfdl } from "@monstermann/dfdl";

const add = dfdl((a: number, b: number) => a + b);
```

```ts [Data-first]
add(1, 2); // 3
```

```ts [Data-last]
add(2)(1); // 3
pipe(1, add(2)); // 3
```

:::

You can explicitly define the function arity if necessary, otherwise `fn.length` is used:

<!-- prettier-ignore -->
```ts
const add = dfdl(
    (a: number, b: number) => a + b,
    2, // [!code highlight]
);
```

And for functions with optional parameters, you can use a custom predicate:

::: code-group

```ts [Example]
import { dfdl } from "@monstermann/dfdl";

const slice = dfdl(
    (str: string, start: number, end?: number) => str.slice(start, end),
    (args) => typeof args[0] === "string", // [!code highlight]
);
```

```ts [Data-first]
slice("Hello World!", 0, 5); // "Hello"
slice("Hello World!", 6); // "World!"
```

```ts [Data-last]
slice(0, 5)("Hello World!"); // "Hello"
slice(6)("Hello World!"); // "World!"
```

:::
