# findRemoveLast

`findRemoveLast(array, predicate)`

Finds the last element in `array` that satisfies the provided `predicate` function and removes it, returning a new array without the removed element.

::: code-group

```ts [data-first]
findRemoveLast([1, 2, 3, 4], (x) => x > 2); // [1, 2, 3]
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    findRemoveLast((x) => x > 2),
); // [1, 2, 3]
```

:::
