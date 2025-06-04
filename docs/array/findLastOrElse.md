# findLastOrElse

`findLastOrElse(array, predicate, callback)`

Returns the last element in `array` that satisfies the provided `predicate` function, or the result of calling `callback` with the array if no element is found.

::: code-group

```ts [data-first]
findLastOrElse(
    [1, 2, 3, 4],
    (x) => x > 10,
    (arr) => arr.length,
); // 4
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    findLastOrElse(
        (x) => x > 10,
        (arr) => arr.length,
    ),
); // 4
```

:::
