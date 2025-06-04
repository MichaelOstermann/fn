# forEach

`forEach(map, fn)`

Executes `fn` for each entry in `map` and returns the original map.

::: code-group

```ts [data-first]
forEach(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    (value, key) => console.log(key, value),
); // Map(2) { "a" => 1, "b" => 2 }
```

```ts [data-last]
pipe(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    forEach((value, key) => console.log(key, value)),
); // Map(2) { "a" => 1, "b" => 2 }
```

:::
