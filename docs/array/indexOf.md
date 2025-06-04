# indexOf

`indexOf(array, value)`

Returns the first index at which `value` can be found in `array`, or -1 if it is not present.

::: code-group

```ts [data-first]
indexOf([1, 2, 3, 2, 4], 2); // 1
```

```ts [data-last]
pipe([1, 2, 3, 2, 4], indexOf(2)); // 1
```

:::
