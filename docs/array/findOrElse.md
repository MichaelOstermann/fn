# findOrElse

`findOrElse(array, predicate, callback)`

Returns the first element in `array` that satisfies the provided `predicate` function, or the result of calling `callback` with the array if no element is found.

::: code-group

```ts [data-first]
findOrElse(
    [1, 2, 3, 4],
    (x) => x > 10,
    (arr) => arr.length,
); // 4
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    findOrElse(
        (x) => x > 10,
        (arr) => arr.length,
    ),
); // 4
```

:::
