# mapEach

`mapEach(array, mapper)`

Applies the `mapper` function to each element in `array`, returning a new array with the mapped elements.

::: code-group

```ts [data-first]
mapEach([1, 2, 3, 4], (x) => x * 2); // [2, 4, 6, 8]
```

```ts [data-last]
pipe(
    [1, 2, 3, 4],
    mapEach((x) => x * 2),
); // [2, 4, 6, 8]
```

:::
