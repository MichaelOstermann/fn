# findReplaceOrElse

`findReplaceOrElse(array, predicate, replacement, callback)`

Finds the first element in `array` that satisfies the provided `predicate` function and replaces it with `replacement`, returning a new array with the replaced element, or the result of calling `callback` with the array if no element is found.

::: code-group

```ts [data-first]
findReplaceOrElse(
    [1, 2, 3, 4],
    (x) => x > 10,
    99,
    (arr) => arr.length,
); // 4
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    findReplaceOrElse(
        (x) => x > 10,
        99,
        (arr) => arr.length,
    ),
); // 4
```

:::
