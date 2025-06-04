# getOrThrow

`getOrThrow(map, key)`

Gets the value associated with `key` from `map`, throwing an error if the key doesn't exist or the value is nullable.

::: code-group

```ts [data-first]
getOrThrow(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
); // 1

getOrThrow(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    "b",
); // throws FnError

getOrThrow(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "c",
); // throws FnError
```

```ts [data-last]
pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    getOrThrow("a"),
); // 1

pipe(
    new Map([
        ["a", 1],
        ["b", null],
    ]),
    getOrThrow("b"),
); // throws FnError

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    getOrThrow("c"),
); // throws FnError
```

:::
