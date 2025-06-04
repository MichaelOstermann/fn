# findRemoveLastOrElse

`findRemoveLastOrElse(array, predicate, callback)`

Finds the last element in `array` that satisfies the provided `predicate` function and removes it, returning a new array without the removed element, or the result of calling `callback` with the array if no element is found.

::: code-group

```ts [data-first]
findRemoveLastOrElse(
    [1, 2, 3, 4],
    (x) => x > 10,
    (arr) => arr.length,
); // 4
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    findRemoveLastOrElse(
        (x) => x > 10,
        (arr) => arr.length,
    ),
); // 4
```

:::
