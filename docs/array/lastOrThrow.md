# lastOrThrow

`lastOrThrow(array)`

Returns the last element of `array`, or throws an error if the array is empty.

::: code-group

```ts [data-first]
lastOrThrow([1, 2, 3, 4]); // 4
```

```ts [data-last]
pipe([1, 2, 3, 4], lastOrThrow()); // 4
```

:::
