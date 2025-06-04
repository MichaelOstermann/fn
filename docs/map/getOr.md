# getOr

`getOr(map, key, or)`

Gets the value associated with `key` from `map`, returning `or` if the key doesn't exist or the value is nullable.

::: code-group

```ts [data-first]
getOr(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    "a",
    0,
); // 1

getOr(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    "b",
    0,
); // 0

getOr(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    "c",
    0,
); // 0
```

```ts [data-last]
pipe(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    getOr("a", 0),
); // 1

pipe(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    getOr("b", 0),
); // 0

pipe(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    getOr("c", 0),
); // 0
```

:::
