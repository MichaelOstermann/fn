# findMapLastOrThrow

`findMapLastOrThrow(array, predicate, mapper)`

Finds the last element in `array` that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new array with the mapped element, or throws an error if no element is found.

::: code-group

```ts [data-first]
findMapLastOrThrow(
    [1, 2, 3, 4],
    (x) => x > 2,
    (x) => x * 10,
); // [1, 2, 3, 40]
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    findMapLastOrThrow(
        (x) => x > 2,
        (x) => x * 10,
    ),
); // [1, 2, 3, 40]
```

:::
