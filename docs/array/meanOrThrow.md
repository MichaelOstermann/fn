# meanOrThrow

`meanOrThrow(array)`

Returns the mean (average) value from `array`, or throws an error if the array is empty.

::: code-group

```ts [data-first]
meanOrThrow([1, 2, 3]); // 2
meanOrThrow([]); // throws FnError
```

```ts [data-last]
pipe([1, 2, 3], meanOrThrow()); // 2
pipe([], meanOrThrow()); // throws FnError
```

:::
