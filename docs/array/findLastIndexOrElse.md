# findLastIndexOrElse

`findLastIndexOrElse(target, predicate, orElse)`

Returns the index of the last element in `target` that satisfies the provided `predicate` function. If no element satisfies the predicate, calls `orElse` with the original array.

::: code-group

```ts [data-first]
findLastIndexOrElse(
    [1, 3, 2, 4],
    (x) => x > 2,
    () => -1,
); // 3

findLastIndexOrElse(
    [1, 2, 3, 4],
    (x) => x > 5,
    (arr) => arr.length,
); // 4
```

```ts [data-last]
pipe(
    [1, 3, 2, 4],
    findLastIndexOrElse(
        (x) => x > 2,
        () => -1,
    ),
); // 3

pipe(
    [1, 2, 3, 4],
    findLastIndexOrElse(
        (x) => x > 5,
        (arr) => arr.length,
    ),
); // 4
```

:::
