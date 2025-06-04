# medianOr

`medianOr(array, fallback)`

Returns the median value of the number `array`, or `fallback` if the array is empty.

::: code-group

```ts [data-first]
medianOr([1, 2, 3, 4, 5], 0); // 3
```

```ts [data-last]
pipe([1, 2, 3, 4, 5], medianOr(0)); // 3
```

:::
