# hasAll

`hasAll(map, keys)`

Checks if `map` contains all of the specified `keys`. This function supports iterables.

::: code-group

```ts [data-first]
hasAll(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    ["a", "b"],
); // true

hasAll(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    ["a", "d"],
); // false
```

```ts [data-last]
pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    hasAll(["a", "b"]),
); // true

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    hasAll(["a", "d"]),
); // false
```

:::
