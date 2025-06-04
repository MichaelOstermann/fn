# replaceLastOr

`replaceLastOr(target, value, replacement, or)`

Replaces the last occurrence of `value` with `replacement` in `target` array. If the value is not found, returns the fallback value `or`. If value and replacement are the same, returns the original array unchanged.

::: code-group

```ts [data-first]
replaceLastOr([1, 2, 3, 2], 2, 5, []); // [1, 2, 3, 5]
replaceLastOr([1, 2, 3], 4, 5, []); // []
```

```ts [data-last]
pipe([1, 2, 3, 2], replaceLastOr(2, 5, [])); // [1, 2, 3, 5]
pipe([1, 2, 3], replaceLastOr(4, 5, [])); // []
```

:::
