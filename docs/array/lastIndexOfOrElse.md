# lastIndexOfOrElse

`lastIndexOfOrElse(target, value, orElse)`

Returns the index of the last occurrence of `value` in `target`. If `value` is not found, calls `orElse` with the original array.

::: code-group

```ts [data-first]
lastIndexOfOrElse([1, 2, 3, 2], 2, () => -1); // 3
lastIndexOfOrElse([1, 2, 3], 4, (arr) => arr.length); // 3
```

```ts [data-last]
pipe(
    [1, 2, 3, 2],
    lastIndexOfOrElse(2, () => -1),
); // 3

pipe(
    [1, 2, 3],
    lastIndexOfOrElse(4, (arr) => arr.length),
); // 3
```

:::
