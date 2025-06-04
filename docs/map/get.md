# get

`get(map, key)`

Gets the value associated with `key` from `map`, returning `undefined` if the key doesn't exist.

::: code-group

```ts [data-first]
get(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "a",
); // 1

get(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    "c",
); // undefined
```

```ts [data-last]
pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    get("a"),
); // 1

pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    get("c"),
); // undefined
```

:::
