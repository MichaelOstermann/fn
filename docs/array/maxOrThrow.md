# maxOrThrow

`maxOrThrow(array)`

Returns the maximum value from `array`, or throws an error if the array is empty.

::: code-group

```ts [data-first]
maxOrThrow([1, 5, 3]); // 5
maxOrThrow([]); // throws FnError
```

```ts [data-last]
pipe([1, 5, 3], maxOrThrow()); // 5
pipe([], maxOrThrow()); // throws FnError
```

:::
