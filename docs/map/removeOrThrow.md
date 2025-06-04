# removeOrThrow

`removeOrThrow(map, key)`

Removes the entry with the specified `key` from `map`, throwing an error if the key doesn't exist.

::: code-group

```ts [data-first]
removeOrThrow(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
); // Map(1) { "b" => 2 }

removeOrThrow(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "c",
); // throws FnError
```

```ts [data-last]
pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    removeOrThrow("a"),
); // Map(1) { "b" => 2 }

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    removeOrThrow("c"),
); // throws FnError
```

:::
