# mapOrThrow

`mapOrThrow(map, key, transform)`

Transforms the value at `key` in `map` using `transform`, throwing an error if the key doesn't exist.

::: code-group

```ts [data-first]
mapOrThrow(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
    (value) => value * 2,
); // Map(2) { "a" => 2, "b" => 2 }

mapOrThrow(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "c",
    (value) => value * 2,
); // throws FnError
```

```ts [data-last]
pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    mapOrThrow("a", (value) => value * 2),
); // Map(2) { "a" => 2, "b" => 2 }

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    mapOrThrow("c", (value) => value * 2),
); // throws FnError
```

:::
