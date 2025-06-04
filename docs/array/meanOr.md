# meanOr

`meanOr(array, fallback)`

Returns the mean (average) value of the number `array`, or `fallback` if the array is empty.

::: code-group

```ts [data-first]
meanOr([1, 2, 3, 4], 0); // 2.5
```

```ts [data-last]
pipe([1, 2, 3, 4], meanOr(0)); // 2.5
```

:::
