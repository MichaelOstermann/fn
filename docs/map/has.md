# has

`has(map, key)`

Checks if `map` contains the specified `key`.

::: code-group

```ts [data-first]
has(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
); // true

has(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "c",
); // false
```

```ts [data-last]
pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    has("a"),
); // true

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    has("c"),
); // false
```

:::
