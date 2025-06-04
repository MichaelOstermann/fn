# findLastIndexOrThrow

`findLastIndexOrThrow(target, predicate)`

Returns the index of the last element in `target` that satisfies the provided `predicate` function. If no element satisfies the predicate, throws an error.

::: code-group

```ts [data-first]
findLastIndexOrThrow([1, 3, 2, 4], (x) => x > 2); // 3
findLastIndexOrThrow([1, 2, 3, 4], (x) => x > 5); // throws FnError
```

```ts [data-last]
pipe(
    [1, 3, 2, 4],
    findLastIndexOrThrow((x) => x > 2),
); // 3

pipe(
    [1, 2, 3, 4],
    findLastIndexOrThrow((x) => x > 5),
); // throws FnError
```

:::
