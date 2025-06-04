# findReplaceOr

`findReplaceOr(array, predicate, replacement, fallback)`

Finds the first element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element, or `fallback` if no element is found.

::: code-group

```ts [data-first]
findReplaceOr([1, 2, 3, 4], (x) => x > 10, 99, []); // []
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    findReplaceOr((x) => x > 10, 99, []),
); // []
```

:::
