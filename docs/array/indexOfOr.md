# indexOfOr

`indexOfOr(target, value, or)`

Returns the index of the first occurrence of `value` in `target`. If `value` is not found, returns `or`.

::: code-group

```ts [data-first]
indexOfOr([1, 2, 3, 2], 2, -1); // 1
indexOfOr([1, 2, 3], 4, -1); // -1
```

```ts [data-last]
pipe([1, 2, 3, 2], indexOfOr(2, -1)); // 1
pipe([1, 2, 3], indexOfOr(4, -1)); // -1
```

:::
