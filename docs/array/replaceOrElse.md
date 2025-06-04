# replaceOrElse

`replaceOrElse(target, value, replacement, orElse)`

Replaces the first occurrence of `value` in `target` with `replacement`. If `value` is not found, calls `orElse` with the original array.

::: code-group

```ts [data-first]
replaceOrElse([1, 2, 3, 2], 2, 9, () => []); // [1, 9, 3, 2]
replaceOrElse([1, 2, 3], 4, 9, (arr) => arr); // [1, 2, 3]
```

```ts [data-last]
pipe(
    [1, 2, 3, 2],
    replaceOrElse(2, 9, () => []),
); // [1, 9, 3, 2]

pipe(
    [1, 2, 3],
    replaceOrElse(4, 9, (arr) => arr),
); // [1, 2, 3]
```

:::
