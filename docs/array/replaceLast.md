# replaceLast

`replaceLast(target, value, replacement)`

Replaces the last occurrence of `value` with `replacement` in `target` array. If the value is not found or if value and replacement are the same, returns the original array unchanged.

::: code-group

```ts [data-first]
replaceLast([1, 2, 3, 2], 2, 5); // [1, 2, 3, 5]
```

```ts [data-last]
pipe([1, 2, 3, 2], replaceLast(2, 5)); // [1, 2, 3, 5]
```

:::
