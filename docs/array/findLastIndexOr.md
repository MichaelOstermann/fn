# findLastIndexOr

`findLastIndexOr(target, predicate, or)`

Returns the index of the last element in `target` that satisfies the provided `predicate` function. If no element satisfies the predicate, returns `or`.

::: code-group

```ts [data-first]
findLastIndexOr([1, 3, 2, 4], (x) => x > 2, -1); // 3
findLastIndexOr([1, 2, 3, 4], (x) => x > 5, -1); // -1
```

```ts [data-last]
pipe(
    [1, 3, 2, 4],
    findLastIndexOr((x) => x > 2, -1),
); // 3

pipe(
    [1, 2, 3, 4],
    findLastIndexOr((x) => x > 5, -1),
); // -1
```

:::
