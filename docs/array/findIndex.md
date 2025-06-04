# findIndex

`findIndex(array, predicate)`

Returns the index of the first element in `array` that satisfies the provided `predicate` function, or -1 if no element is found.

::: code-group

```ts [data-first]
findIndex([1, 2, 3, 4], (x) => x > 2); // 2
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    findIndex((x) => x > 2),
); // 2
```

:::
