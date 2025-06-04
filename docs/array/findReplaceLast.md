# findReplaceLast

`findReplaceLast(array, predicate, replacement)`

Finds the last element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element.

::: code-group

```ts [data-first]
findReplaceLast([1, 2, 3, 4], (x) => x > 2, 10); // [1, 2, 3, 10]
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    findReplaceLast((x) => x > 2, 10),
); // [1, 2, 3, 10]
```

:::
