# findMapAll

`findMapAll(array, predicate, mapper)`

Finds all elements in `array` that satisfy the provided `predicate` function and applies the `mapper` function to each of them, returning a new array with the mapped elements.

::: code-group

```ts [data-first]
findMapAll(
    [1, 2, 3, 4],
    (x) => x > 2,
    (x) => x * 10,
); // [1, 2, 30, 40]
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    findMapAll(
        (x) => x > 2,
        (x) => x * 10,
    ),
); // [1, 2, 30, 40]
```

:::
