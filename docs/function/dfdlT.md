### dfdlT

- `dfdlT(fn, arity?: boolean)`
- `dfdlT(fn, isDataFirst: (args: IArguments) => boolean)`

Same as `dfdl` but allows explicit type definitions, which is in particularly useful if you want to use generics or additional overloads:

::: code-group

```ts [Example (Generics)]
import { dfdlT } from "@monstermann/dfdl";

const map = dfdlT<
    <T, U>(fn: (item: T) => U) => (arr: T[]) => U[],
    <T, U>(arr: T[], fn: (item: T) => U) => U[]
>((arr, fn) => arr.map(fn));
```

```ts [Example (Overloads)]
import { dfdlT } from "@monstermann/dfdl";

const map: {
    <T, U>(fn: (item: T) => U): (arr: T[]) => U[];
    <T, U>(arr: T[], fn: (item: T) => U): U[];
} = dfdlT(<T, U>(arr: T[], fn: (item: T) => U): U[] => arr.map(fn));
```

```ts [Data-first]
map([1, 2, 3], (x) => x * 2); // [2, 4, 6]
```

```ts [Data-last]
map((x) => x * 2)([1, 2, 3]); // [2, 4, 6]

pipe(
    [1, 2, 3],
    map((x) => x * 2),
); // [2, 4, 6]
```

:::

> [!TIP]
> Typically when defining your functions in this case, you should experience better type inference when using [`NoInfer`](https://devblogs.microsoft.com/typescript/announcing-typescript-5-4-beta/#the-noinfer-utility-type):

```ts
const map = dfdlT<
    <T, U>(fn: (item: NoInfer<T>) => U) => (arr: T[]) => U[],
    <T, U>(arr: T[], fn: (item: NoInfer<T>) => U) => U[]
>((arr, fn) => arr.map(fn));
```
