# map

`map(target, map)`

Applies a mapping function to a value if it's not `null` or `undefined`. If the target value is `null` or `undefined`, it returns the target unchanged. Otherwise, it applies the mapping function and returns the result.

::: code-group

```ts [data-first]
map(5, (x) => x * 2); // 10
map(null, (x) => x * 2); // null
map(undefined, (x) => x * 2); // undefined
```

```ts [data-last]
pipe(
    5,
    map((x) => x * 2),
); // 10

pipe(
    null,
    map((x) => x * 2),
); // null
```

:::
