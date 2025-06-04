# filter

`filter(map, predicate)`

Filters `map` by keeping only the entries where `predicate` returns true for the value.

::: code-group

```ts [data-first]
filter(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    (value) => value > 1,
); // Map(2) { "b" => 2, "c" => 3 }
```

```ts [data-last]
pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    filter((value) => value > 1),
); // Map(2) { "b" => 2, "c" => 3 }
```

:::
