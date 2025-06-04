# findOrThrow

`findOrThrow(array, predicate)`

Returns the first element in `array` that satisfies the provided `predicate` function, or throws an error if no element is found.

::: code-group

```ts [data-first]
findOrThrow([1, 2, 3, 4], (x) => x > 2); // 3
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    findOrThrow((x) => x > 2),
); // 3
```

:::
