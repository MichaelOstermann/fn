# insertAllAtOrElse

`insertAllAtOrElse(target, idx, values, orElse)`

Inserts all `values` at the specified `idx` in `target`. If the index is out of bounds, calls `orElse` with the original array. Supports iterables.

::: code-group

```ts [data-first]
insertAllAtOrElse([1, 2, 3], 1, [8, 9], () => []); // [1, 8, 9, 2, 3]
insertAllAtOrElse([1, 2, 3], 5, [8, 9], (arr) => arr); // [1, 2, 3]
```

```ts [data-last]
pipe(
    [1, 2, 3],
    insertAllAtOrElse(1, [8, 9], () => []),
); // [1, 8, 9, 2, 3]

pipe(
    [1, 2, 3],
    insertAllAtOrElse(5, [8, 9], (arr) => arr),
); // [1, 2, 3]
```

:::
