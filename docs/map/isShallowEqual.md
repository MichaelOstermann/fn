# isShallowEqual

`isShallowEqual(map, source)`

Checks if `map` is shallow equal to `source` by comparing their keys and values using strict equality.

::: code-group

```ts [data-first]
isShallowEqual(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
); // true

isShallowEqual(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    new Map([
        ["a", 1],
        ["b", 3],
    ]),
); // false
```

```ts [data-last]
pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    isShallowEqual(
        new Map([
            ["a", 1],
            ["b", 2],
        ]),
    ),
); // true

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    isShallowEqual(
        new Map([
            ["a", 1],
            ["b", 3],
        ]),
    ),
); // false
```

:::
