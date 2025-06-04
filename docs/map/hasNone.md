# hasNone

`hasNone(map, keys)`

Checks if `map` contains none of the specified `keys`. This function supports iterables.

::: code-group

```ts [data-first]
hasNone(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    ["c", "d"],
); // true

hasNone(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    ["a", "c"],
); // false
```

```ts [data-last]
pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    hasNone(["c", "d"]),
); // true

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    hasNone(["a", "c"]),
); // false
```

:::
