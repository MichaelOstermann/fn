# find

`find(array, predicate)`

Returns the first element in `array` that satisfies the provided `predicate` function, or `undefined` if no element is found.

::: code-group

```ts [data-first]
find([1, 2, 3, 4], (x) => x > 2); // 3
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    find((x) => x > 2),
); // 3
```

:::
