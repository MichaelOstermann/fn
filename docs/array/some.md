# some

`some(array, predicate)`

Returns `true` if at least one element in `array` satisfies the provided `predicate` function, otherwise returns `false`.

::: code-group

```ts [data-first]
some([1, 2, 3, 4], (x) => x > 3); // true
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    some((x) => x > 3),
); // true
```

:::
