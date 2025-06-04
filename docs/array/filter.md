# filter

`filter(target, by)`

Filters elements from `target` array based on the predicate function `by`.

::: code-group

```ts [data-first]
filter([1, 2, 3, 4], (x) => x > 2); // [3, 4]
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    filter((x) => x > 2),
); // [3, 4]
```

:::
