# compact

`compact(map)`

Removes all nullable values from `map`.

::: code-group

```ts [data-first]
compact(
    new Map([
        ["a", 1],
        ["b", null],
        ["c", undefined],
    ]),
); // Map(1) { "a" => 1 }
```

```ts [data-last]
pipe(
    new Map([
        ["a", 1],
        ["b", null],
        ["c", undefined],
    ]),
    compact(),
); // Map(1) { "a" => 1 }
```

:::
