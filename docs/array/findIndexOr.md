# findIndexOr

`findIndexOr(target, predicate, or)`

Returns the index of the first element in `target` that satisfies the provided `predicate` function. If no element satisfies the predicate, returns `or`.

::: code-group

```ts [data-first]
findIndexOr([1, 2, 3, 4], (x) => x > 2, -1); // 2
findIndexOr([1, 2, 3, 4], (x) => x > 5, -1); // -1
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    findIndexOr((x) => x > 2, -1),
); // 2

pipe(
    [1, 2, 3, 4],
    findIndexOr((x) => x > 5, -1),
); // -1
```

:::
