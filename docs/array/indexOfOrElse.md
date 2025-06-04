# indexOfOrElse

`indexOfOrElse(target, value, orElse)`

Returns the index of the first occurrence of `value` in `target`. If `value` is not found, calls `orElse` with the original array.

::: code-group

```ts [data-first]
indexOfOrElse([1, 2, 3, 2], 2, () => -1); // 1
indexOfOrElse([1, 2, 3], 4, (arr) => arr.length); // 3
```

```ts [data-last]
pipe(
    [1, 2, 3, 2],
    indexOfOrElse(2, () => -1),
); // 1

pipe(
    [1, 2, 3],
    indexOfOrElse(4, (arr) => arr.length),
); // 3
```

:::
