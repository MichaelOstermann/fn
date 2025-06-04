# flatMap

`flatMap(array, mapper)`

Maps each element in `array` using the `mapper` function and flattens the result by one level.

::: code-group

```ts [data-first]
flatMap([1, 2, 3], (x) => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
```

```ts [data-last]
pipe(
    [1, 2, 3],
    flatMap((x) => [x, x * 2]),
); // [1, 2, 2, 4, 3, 6]
```

:::
