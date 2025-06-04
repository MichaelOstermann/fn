# firstOr

`firstOr(array, fallback)`

Returns the first element of `array`, or `fallback` if the array is empty.

::: code-group

```ts [data-first]
firstOr([1, 2, 3, 4], 0); // 1
```

```ts [data-last]
pipe([1, 2, 3, 4], firstOr(0)); // 1
```

:::
