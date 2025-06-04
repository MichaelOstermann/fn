# findLastIndex

`findLastIndex(array, predicate)`

Returns the index of the last element in `array` that satisfies the provided `predicate` function, or -1 if no element is found.

::: code-group

```ts [data-first]
findLastIndex([1, 2, 3, 4], (x) => x > 2); // 3
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    findLastIndex((x) => x > 2),
); // 3
```

:::
