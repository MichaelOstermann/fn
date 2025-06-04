# reject

`reject(array, predicate)`

Returns a new array with elements from `array` that do not satisfy the provided `predicate` function.

::: code-group

```ts [data-first]
reject([1, 2, 3, 4, 5], (x) => x % 2 === 0); // [1, 3, 5]
```

```ts [data-last]
pipe(
    [1, 2, 3, 4, 5],
    reject((x) => x % 2 === 0),
); // [1, 3, 5]
```

:::
