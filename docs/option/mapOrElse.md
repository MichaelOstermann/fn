# mapOrElse

`mapOrElse(target, map, orElse)`

Applies a mapping function to a value if it's not `null` or `undefined`, otherwise calls a fallback function. If the target value is `null` or `undefined`, it calls the `orElse` function and returns its result. Otherwise, it applies the mapping function and returns the result.

::: code-group

```ts [data-first]
mapOrElse(
    5,
    (x) => x * 2,
    () => 0,
); // 10

mapOrElse(
    null,
    (x) => x * 2,
    () => 0,
); // 0

mapOrElse(
    undefined,
    (x) => x * 2,
    () => -1,
); // -1
```

```ts [data-last]
pipe(
    5,
    mapOrElse(
        (x) => x * 2,
        () => 0,
    ),
); // 10

pipe(
    null,
    mapOrElse(
        (x) => x * 2,
        () => 0,
    ),
); // 0
```

:::
