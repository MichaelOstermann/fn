# removeAll

`removeAll(map, keys)`

Removes all entries with the specified `keys` from `map`, returning a new map. This function supports iterables.

::: code-group

```ts [data-first]
removeAll(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    ["a", "c"],
); // Map(1) { "b" => 2 }

removeAll(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    ["d", "e"],
); // Map(3) { "a" => 1, "b" => 2, "c" => 3 }
```

```ts [data-last]
pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    removeAll(["a", "c"]),
); // Map(1) { "b" => 2 }

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    removeAll(["d", "e"]),
); // Map(3) { "a" => 1, "b" => 2, "c" => 3 }
```

:::
