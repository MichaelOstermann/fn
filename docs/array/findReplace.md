# findReplace

`findReplace(array, predicate, replacement)`

Finds the first element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element.

::: code-group

```ts [data-first]
findReplace([1, 2, 3, 4], (x) => x > 2, 10); // [1, 2, 10, 4]
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    findReplace((x) => x > 2, 10),
); // [1, 2, 10, 4]
```

:::
