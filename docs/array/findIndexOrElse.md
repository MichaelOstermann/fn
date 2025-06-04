# findIndexOrElse

`findIndexOrElse(target, predicate, orElse)`

Returns the index of the first element in `target` that satisfies the provided `predicate` function. If no element satisfies the predicate, calls `orElse` with the original array.

::: code-group

```ts [data-first]
findIndexOrElse(
    [1, 2, 3, 4],
    (x) => x > 2,
    () => -1,
); // 2

findIndexOrElse(
    [1, 2, 3, 4],
    (x) => x > 5,
    (arr) => arr.length,
); // 4
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    findIndexOrElse(
        (x) => x > 2,
        () => -1,
    ),
); // 2

pipe(
    [1, 2, 3, 4],
    findIndexOrElse(
        (x) => x > 5,
        (arr) => arr.length,
    ),
); // 4
```

:::
