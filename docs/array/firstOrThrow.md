# firstOrThrow

`firstOrThrow(array)`

Returns the first element of `array`, or throws an error if the array is empty.

::: code-group

```ts [data-first]
firstOrThrow([1, 2, 3, 4]); // 1
```

```ts [data-last]
pipe([1, 2, 3, 4], firstOrThrow()); // 1
```

:::
