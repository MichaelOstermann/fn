# findMapLastOr

`findMapLastOr(array, predicate, mapper, fallback)`

Finds the last element in `array` that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new array with the mapped element, or `fallback` if no element is found.

::: code-group

```ts [data-first]
findMapLastOr(
    [1, 2, 3, 4],
    (x) => x > 10,
    (x) => x * 10,
    [],
); // []
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    findMapLastOr(
        (x) => x > 10,
        (x) => x * 10,
        [],
    ),
); // []
```

:::
