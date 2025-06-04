# hasAny

`hasAny(map, keys)`

Checks if `map` contains any of the specified `keys`. This function supports iterables.

::: code-group

```ts [data-first]
hasAny(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    ["a", "c"],
); // true

hasAny(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    ["c", "d"],
); // false
```

```ts [data-last]
pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    hasAny(["a", "c"]),
); // true

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    hasAny(["c", "d"]),
); // false
```

:::
