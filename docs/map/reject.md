# reject

`reject(map, by)`

Rejects entries from `map` where `by` returns true for the value.

::: code-group

```ts [data-first]
reject(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    (value) => value > 1,
); // Map(1) { "a" => 1 }
```

```ts [data-last]
pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    reject((value) => value > 1),
); // Map(1) { "a" => 1 }
```

:::
