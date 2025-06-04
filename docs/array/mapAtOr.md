# mapAtOr

`mapAtOr(array, index, mapper, fallback)`

Applies the `mapper` function to the element at the specified `index` in `array`, returning a new array with the mapped element, or `fallback` if the index is out of bounds.

::: code-group

```ts [data-first]
mapAtOr([1, 2, 3], 10, (x) => x * 10, []); // []
```

```ts [data-last]
pipe(
    [1, 2, 3],
    mapAtOr(10, (x) => x * 10, []),
); // []
```

:::
