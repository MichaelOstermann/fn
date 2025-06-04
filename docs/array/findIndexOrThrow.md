# findIndexOrThrow

`findIndexOrThrow(target, predicate)`

Returns the index of the first element in `target` that satisfies the provided `predicate` function. If no element satisfies the predicate, throws an error.

::: code-group

```ts [data-first]
findIndexOrThrow([1, 2, 3, 4], (x) => x > 2); // 2
findIndexOrThrow([1, 2, 3, 4], (x) => x > 5); // throws FnError
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    findIndexOrThrow((x) => x > 2),
); // 2

pipe(
    [1, 2, 3, 4],
    findIndexOrThrow((x) => x > 5),
); // throws FnError
```

:::
