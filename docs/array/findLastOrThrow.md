# findLastOrThrow

`findLastOrThrow(array, predicate)`

Returns the last element in `array` that satisfies the provided `predicate` function, or throws an error if no element is found.

::: code-group

```ts [data-first]
findLastOrThrow([1, 2, 3, 4], (x) => x > 2); // 4
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    findLastOrThrow((x) => x > 2),
); // 4
```

:::
