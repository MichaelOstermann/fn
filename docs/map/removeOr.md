# removeOr

`removeOr(map, key, or)`

Removes the entry with the specified `key` from `map`, returning `or` if the key doesn't exist.

::: code-group

```ts [data-first]
removeOr(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
    null,
); // Map(1) { "b" => 2 }

removeOr(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "c",
    null,
); // null
```

```ts [data-last]
pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    removeOr("a", null),
); // Map(1) { "b" => 2 }

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    removeOr("c", null),
); // null
```

:::
