# removeLastOrElse

`removeLastOrElse(target, value, orElse)`

Removes the last occurrence of `value` from `target` array. If the value is not found, calls the `orElse` function with the original array and returns its result.

::: code-group

```ts [data-first]
removeLastOrElse([1, 2, 3, 2], 2, () => []); // [1, 2, 3]
removeLastOrElse([1, 2, 3], 4, (arr) => arr); // [1, 2, 3]
```

```ts [data-last]
pipe(
    [1, 2, 3, 2],
    removeLastOrElse(2, () => []),
); // [1, 2, 3]

pipe(
    [1, 2, 3],
    removeLastOrElse(4, (arr) => arr),
); // [1, 2, 3]
```

:::
