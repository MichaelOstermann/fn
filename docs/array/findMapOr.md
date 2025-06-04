# findMapOr

`findMapOr(array, predicate, mapper, fallback)`

Finds the first element in `array` that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new array with the mapped element, or `fallback` if no element is found.

::: code-group

```ts [data-first]
findMapOr(
    [1, 2, 3, 4],
    (x) => x > 10,
    (x) => x * 10,
    [],
); // []
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    findMapOr(
        (x) => x > 10,
        (x) => x * 10,
        [],
    ),
); // []
```

:::
