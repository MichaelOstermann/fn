# findRemoveLastOrThrow

`findRemoveLastOrThrow(array, predicate)`

Finds the last element in `array` that satisfies the provided `predicate` function and removes it, returning a new array without the removed element, or throws an error if no element is found.

::: code-group

```ts [data-first]
findRemoveLastOrThrow([1, 2, 3, 4], (x) => x > 2); // [1, 2, 3]
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    findRemoveLastOrThrow((x) => x > 2),
); // [1, 2, 3]
```

:::
