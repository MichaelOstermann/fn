# findOr

`findOr(array, predicate, fallback)`

Returns the first element in `array` that satisfies the provided `predicate` function, or `fallback` if no element is found.

::: code-group

```ts [data-first]
findOr([1, 2, 3, 4], (x) => x > 10, 0); // 0
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    findOr((x) => x > 10, 0),
); // 0
```

:::
