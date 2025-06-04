# replace

`replace(target, value, replacement)`

Replaces the first occurrence of `value` with `replacement` in `target` array. If the value is not found or if value and replacement are the same, returns the original array unchanged.

::: code-group

```ts [data-first]
replace([1, 2, 3, 2], 2, 5); // [1, 5, 3, 2]
```

```ts [data-last]
pipe([1, 2, 3, 2], replace(2, 5)); // [1, 5, 3, 2]
```

:::
