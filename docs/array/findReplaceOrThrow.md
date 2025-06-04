# findReplaceOrThrow

`findReplaceOrThrow(array, predicate, replacement)`

Finds the first element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element, or throws an error if no element is found.

::: code-group

```ts [data-first]
findReplaceOrThrow([1, 2, 3, 4], (x) => x > 2, 99); // [1, 2, 99, 4]
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    findReplaceOrThrow((x) => x > 2, 99),
); // [1, 2, 99, 4]
```

:::
