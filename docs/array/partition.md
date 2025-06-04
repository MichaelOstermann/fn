# partition

`partition(array, predicate)`

Splits `array` into two arrays based on the `predicate` function, returning a tuple where the first array contains elements that satisfy the predicate and the second contains those that don't.

::: code-group

```ts [data-first]
partition([1, 2, 3, 4, 5], (x) => x % 2 === 0); // [[2, 4], [1, 3, 5]]
```

```ts [data-last]
pipe(
    [1, 2, 3, 4, 5],
    partition((x) => x % 2 === 0),
); // [[2, 4], [1, 3, 5]]
```

:::
