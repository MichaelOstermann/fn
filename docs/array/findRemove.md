# findRemove

`findRemove(array, predicate)`

Finds the first element in `array` that satisfies the provided `predicate` function and removes it, returning a new array without the removed element.

::: code-group

```ts [data-first]
findRemove([1, 2, 3, 4], (x) => x > 2); // [1, 2, 4]
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    findRemove((x) => x > 2),
); // [1, 2, 4]
```

:::
