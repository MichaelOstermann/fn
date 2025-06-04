# replaceLastOrElse

`replaceLastOrElse(target, value, replacement, orElse)`

Replaces the last occurrence of `value` in `target` with `replacement`. If `value` is not found, calls `orElse` with the original array.

::: code-group

```ts [data-first]
replaceLastOrElse([1, 2, 3, 2], 2, 9, () => []); // [1, 2, 3, 9]
replaceLastOrElse([1, 2, 3], 4, 9, (arr) => arr); // [1, 2, 3]
```

```ts [data-last]
pipe(
    [1, 2, 3, 2],
    replaceLastOrElse(2, 9, () => []),
); // [1, 2, 3, 9]

pipe(
    [1, 2, 3],
    replaceLastOrElse(4, 9, (arr) => arr),
); // [1, 2, 3]
```

:::
