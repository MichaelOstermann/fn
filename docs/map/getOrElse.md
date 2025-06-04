# getOrElse

`getOrElse(map, key, orElse)`

Gets the value associated with `key` from `map`, calling `orElse` with the map if the key doesn't exist or the value is nullable.

::: code-group

```ts [data-first]
getOrElse(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    "a",
    () => 0,
); // 1

getOrElse(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    "b",
    () => 0,
); // 0

getOrElse(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    "c",
    (map) => map.size,
); // 2
```

```ts [data-last]
pipe(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    getOrElse("a", () => 0),
); // 1

pipe(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    getOrElse("b", () => 0),
); // 0

pipe(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    getOrElse("c", (map) => map.size),
); // 2
```

:::
