# slice

`slice(target, start, end?)`

Extracts a section of `target` array from `start` index to `end` index (exclusive). If `end` is not provided, extracts to the end of the array.

::: code-group

```ts [data-first]
slice([1, 2, 3, 4, 5], 1, 4); // [2, 3, 4]
slice([1, 2, 3, 4, 5], 2); // [3, 4, 5]
slice([1, 2, 3, 4, 5], -2); // [4, 5]
```

```ts [data-last]
pipe([1, 2, 3, 4, 5], slice(1, 4)); // [2, 3, 4]
pipe([1, 2, 3, 4, 5], slice(2)); // [3, 4, 5]
pipe([1, 2, 3, 4, 5], slice(-2)); // [4, 5]
```

:::