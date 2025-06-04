# findMapOrElse

`findMapOrElse(array, predicate, mapper, callback)`

Finds the first element in `array` that satisfies the provided `predicate` function and applies the `mapper` function to it, returning a new array with the mapped element, or the result of calling `callback` with the array if no element is found.

::: code-group

```ts [data-first]
findMapOrElse(
    [1, 2, 3, 4],
    (x) => x > 10,
    (x) => x * 10,
    (arr) => arr.length,
); // 4
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    findMapOrElse(
        (x) => x > 10,
        (x) => x * 10,
        (arr) => arr.length,
    ),
); // 4
```

:::
