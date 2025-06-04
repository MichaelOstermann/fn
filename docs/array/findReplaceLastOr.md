# findReplaceLastOr

`findReplaceLastOr(array, predicate, replacement, fallback)`

Finds the last element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element, or `fallback` if no element is found.

::: code-group

```ts [data-first]
findReplaceLastOr([1, 2, 3, 4], (x) => x > 10, 99, []); // []
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    findReplaceLastOr((x) => x > 10, 99, []),
); // []
```

:::
