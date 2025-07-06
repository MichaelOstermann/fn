# fromEntries

`fromEntries(entries)`

Creates an object from an array of key-value pairs (entries). Each entry should be a tuple of [key, value].

::: code-group

```ts [data-first]
fromEntries([
    ["a", 1],
    ["b", 2],
    ["c", 3],
]); // { a: 1, b: 2, c: 3 }
```

```ts [data-last]
pipe(
    [
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ],
    fromEntries(),
); // { a: 1, b: 2, c: 3 }
```

:::
