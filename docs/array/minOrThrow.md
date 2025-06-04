# minOrThrow

`minOrThrow(target)`

Returns the minimum value from `target` array, or throws an error if the array is empty.

::: code-group

```ts [data-first]
minOrThrow([5, 2, 8, 1]); // 1
minOrThrow([]); // throws FnError
```

```ts [data-last]
pipe([5, 2, 8, 1], minOrThrow()); // 1
pipe([], minOrThrow()); // throws FnError
```

:::
