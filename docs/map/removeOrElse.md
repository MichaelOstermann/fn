# removeOrElse

`removeOrElse(map, key, orElse)`

Removes the entry with the specified `key` from `map`, calling `orElse` with the map if the key doesn't exist.

::: code-group

```ts [data-first]
removeOrElse(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
    () => null,
); // Map(1) { "b" => 2 }

removeOrElse(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "c",
    (map) => map.size,
); // 2
```

```ts [data-last]
pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    removeOrElse("a", () => null),
); // Map(1) { "b" => 2 }

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    removeOrElse("c", (map) => map.size),
); // 2
```

:::
