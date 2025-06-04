# mapEach

`mapEach(map, fn)`

Maps each value in `map` using `fn`, returning a new map with the transformed values.

::: code-group

```ts [data-first]
mapEach(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    (value, key) => value * 2,
); // Map(2) { "a" => 2, "b" => 4 }
```

```ts [data-last]
pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    mapEach((value, key) => value * 2),
); // Map(2) { "a" => 2, "b" => 4 }
```

:::
