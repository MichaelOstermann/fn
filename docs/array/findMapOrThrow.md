# findMapOrThrow

`findMapOrThrow(array, predicate, mapper)`

Finds the first element in `array` that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new array with the mapped element, or throws an error if no element is found.

::: code-group

```ts [data-first]
findMapOrThrow(
    [1, 2, 3, 4],
    (x) => x > 2,
    (x) => x * 10,
); // [1, 2, 30, 4]
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    findMapOrThrow(
        (x) => x > 2,
        (x) => x * 10,
    ),
); // [1, 2, 30, 4]
```

:::
