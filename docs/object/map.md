# map

`map(target, key, transform)`

Creates a new object with the `key` property transformed by the `transform` function.

::: code-group

```ts [data-first]
map({ a: 1, b: 2 }, "a", (x) => x * 2); // { a: 2, b: 2 }
```

```ts [data-last]
pipe(
    { a: 1, b: 2 },
    map("a", (x) => x * 2),
); // { a: 2, b: 2 }
```

:::
