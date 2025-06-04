# removeAtOrElse

`removeAtOrElse(target, idx, orElse)`

Removes the element at index `idx` from `target` array. Supports negative indices to count from the end. If the index is out of bounds, calls the `orElse` function with the original array and returns its result.

::: code-group

```ts [data-first]
removeAtOrElse([1, 2, 3], 1, () => []); // [1, 3]
removeAtOrElse([1, 2, 3], 5, (arr) => arr); // [1, 2, 3]
```

```ts [data-last]
pipe(
    [1, 2, 3],
    removeAtOrElse(1, () => []),
); // [1, 3]

pipe(
    [1, 2, 3],
    removeAtOrElse(5, (arr) => arr),
); // [1, 2, 3]
```

:::
