# none

`none(array, predicate)`

Returns `true` if no elements in `array` satisfy the provided `predicate` function, otherwise returns `false`.

::: code-group

```ts [data-first]
none([1, 2, 3, 4], (x) => x > 10); // true
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    none((x) => x > 10),
); // true
```

:::
