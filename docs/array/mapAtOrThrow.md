# mapAtOrThrow

`mapAtOrThrow(array, index, mapper)`

Applies the `mapper` function to the element at the specified `index` in `array`, returning a new array with the mapped element, or throws an error if the index is out of bounds.

::: code-group

```ts [data-first]
mapAtOrThrow([1, 2, 3, 4], 1, (x) => x * 10); // [1, 20, 3, 4]
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    mapAtOrThrow(1, (x) => x * 10),
); // [1, 20, 3, 4]
```

:::
