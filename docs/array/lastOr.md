# lastOr

`lastOr(array, fallback)`

Returns the last element of `array`, or `fallback` if the array is empty.

::: code-group

```ts [data-first]
lastOr([1, 2, 3, 4], 0); // 4
```

```ts [data-last]
pipe([1, 2, 3, 4], lastOr(0)); // 4
```

:::
