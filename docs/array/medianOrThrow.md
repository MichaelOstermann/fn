# medianOrThrow

`medianOrThrow(array)`

Returns the median value from `array`, or throws an error if the array is empty.

::: code-group

```ts [data-first]
medianOrThrow([1, 3, 5]); // 3
medianOrThrow([1, 2, 3, 4]); // 2.5
medianOrThrow([]); // throws FnError
```

```ts [data-last]
pipe([1, 3, 5], medianOrThrow()); // 3
pipe([1, 2, 3, 4], medianOrThrow()); // 2.5
pipe([], medianOrThrow()); // throws FnError
```

:::
