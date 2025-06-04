# setAtOrElse

`setAtOrElse(target, idx, value, orElse)`

Sets the value at the specified `idx` in `target` to `value`. If the index is out of bounds, calls `orElse` with the original array.

::: code-group

```ts [data-first]
setAtOrElse([1, 2, 3], 1, 9, () => []); // [1, 9, 3]
setAtOrElse([1, 2, 3], -1, 9, () => []); // [1, 2, 9]
setAtOrElse([1, 2, 3], 5, 9, (arr) => arr); // [1, 2, 3]
```

```ts [data-last]
pipe(
    [1, 2, 3],
    setAtOrElse(1, 9, () => []),
); // [1, 9, 3]

pipe(
    [1, 2, 3],
    setAtOrElse(-1, 9, () => []),
); // [1, 2, 9]

pipe(
    [1, 2, 3],
    setAtOrElse(5, 9, (arr) => arr),
); // [1, 2, 3]
```

:::
