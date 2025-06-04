# remove

`remove(map, key)`

Removes the entry with the specified `key` from `map`, returning a new map.

::: code-group

```ts [data-first]
remove(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
); // Map(1) { "b" => 2 }

remove(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "c",
); // Map(2) { "a" => 1, "b" => 2 }
```

```ts [data-last]
pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    remove("a"),
); // Map(1) { "b" => 2 }

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    remove("c"),
); // Map(2) { "a" => 1, "b" => 2 }
```

:::
