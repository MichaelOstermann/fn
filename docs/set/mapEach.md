# mapEach

`mapEach(target, fn)`

Transforms each value in the `target` set using the `fn` function and returns a new set with the transformed values.

::: code-group

```ts [data-first]
mapEach(new Set([1, 2, 3]), (x) => x * 2); // Set([2, 4, 6])
mapEach(new Set(["a", "b"]), (x) => x.toUpperCase()); // Set(['A', 'B'])
```

```ts [data-last]
pipe(
    new Set([1, 2, 3]),
    mapEach((x) => x * 2),
); // Set([2, 4, 6])

pipe(
    new Set(["a", "b"]),
    mapEach((x) => x.toUpperCase()),
); // Set(['A', 'B'])
```

:::
