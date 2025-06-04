# mapOr

`mapOr(target, map, or)`

Applies a mapping function to a value if it's not `null` or `undefined`, otherwise returns a default value. If the target value is `null` or `undefined`, it returns the `or` value. Otherwise, it applies the mapping function and returns the result.

::: code-group

```ts [data-first]
mapOr(5, (x) => x * 2, 0); // 10
mapOr(null, (x) => x * 2, 0); // 0
mapOr(undefined, (x) => x * 2, -1); // -1
```

```ts [data-last]
pipe(
    5,
    mapOr((x) => x * 2, 0),
); // 10

pipe(
    null,
    mapOr((x) => x * 2, 0),
); // 0
```

:::
