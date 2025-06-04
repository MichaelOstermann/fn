# lastIndexOf

`lastIndexOf(array, value)`

Returns the last index at which `value` can be found in `array`, or -1 if it is not present.

::: code-group

```ts [data-first]
lastIndexOf([1, 2, 3, 2, 4], 2); // 3
```

```ts [data-last]
pipe([1, 2, 3, 2, 4], lastIndexOf(2)); // 3
```

:::
