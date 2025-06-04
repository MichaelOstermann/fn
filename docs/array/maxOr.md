# maxOr

`maxOr(array, fallback)`

Returns the maximum value in the number `array`, or `fallback` if the array is empty.

::: code-group

```ts [data-first]
maxOr([1, 3, 2, 5], 0); // 5
```

```ts [data-last]
pipe([1, 3, 2, 5], maxOr(0)); // 5
```

:::
