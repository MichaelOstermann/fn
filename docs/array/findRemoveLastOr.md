# findRemoveLastOr

`findRemoveLastOr(array, predicate, fallback)`

Finds the last element in `array` that satisfies the provided `predicate` function and removes it, returning a new array without the removed element, or `fallback` if no element is found.

::: code-group

```ts [data-first]
findRemoveLastOr([1, 2, 3, 4], (x) => x > 10, []); // []
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    findRemoveLastOr((x) => x > 10, []),
); // []
```

:::
