# lastIndexOfOr

`lastIndexOfOr(target, value, or)`

Returns the index of the last occurrence of `value` in `target`. If `value` is not found, returns `or`.

::: code-group

```ts [data-first]
lastIndexOfOr([1, 2, 3, 2], 2, -1); // 3
lastIndexOfOr([1, 2, 3], 4, -1); // -1
```

```ts [data-last]
pipe([1, 2, 3, 2], lastIndexOfOr(2, -1)); // 3
pipe([1, 2, 3], lastIndexOfOr(4, -1)); // -1
```

:::
