# removeOrElse

`removeOrElse(target, value, orElse)`

Removes the first occurrence of `value` from `target` array. If the value is not found, calls the `orElse` function with the original array and returns its result.

::: code-group

```ts [data-first]
removeOrElse([1, 2, 3, 2], 2, () => []); // [1, 3, 2]
removeOrElse([1, 2, 3], 4, (arr) => arr); // [1, 2, 3]
```

```ts [data-last]
pipe(
    [1, 2, 3, 2],
    removeOrElse(2, () => []),
); // [1, 3, 2]

pipe(
    [1, 2, 3],
    removeOrElse(4, (arr) => arr),
); // [1, 2, 3]
```

:::
