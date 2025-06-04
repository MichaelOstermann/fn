# findLastOr

`findLastOr(array, predicate, fallback)`

Returns the last element in `array` that satisfies the provided `predicate` function, or `fallback` if no element is found.

::: code-group

```ts [data-first]
findLastOr([1, 2, 3, 4], (x) => x > 10, 0); // 0
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    findLastOr((x) => x > 10, 0),
); // 0
```

:::
