# minOr

`minOr(array, fallback)`

Returns the minimum value in the number `array`, or `fallback` if the array is empty.

::: code-group

```ts [data-first]
minOr([5, 1, 3, 2], 0); // 1
```

```ts [data-last]
pipe([5, 1, 3, 2], minOr(0)); // 1
```

:::
