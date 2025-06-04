# mapOr

`mapOr(map, key, transform, or)`

Transforms the value at `key` in `map` using `transform`, returning `or` if the key doesn't exist.

::: code-group

```ts [data-first]
mapOr(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
    (value) => value * 2,
    null,
); // Map(2) { "a" => 2, "b" => 2 }

mapOr(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "c",
    (value) => value * 2,
    null,
); // null
```

```ts [data-last]
pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    mapOr("a", (value) => value * 2, null),
); // Map(2) { "a" => 2, "b" => 2 }

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    mapOr("c", (value) => value * 2, null),
); // null
```

:::
