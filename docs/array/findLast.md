# findLast

`findLast(array, predicate)`

Returns the last element in `array` that satisfies the provided `predicate` function, or `undefined` if no element is found.

::: code-group

```ts [data-first]
findLast([1, 2, 3, 4], (x) => x > 2); // 4
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    findLast((x) => x > 2),
); // 4
```

:::
