# removeLastOr

`removeLastOr(target, value, or)`

Removes the last occurrence of `value` from `target` array. If the value is not found, returns the fallback value `or`.

::: code-group

```ts [data-first]
removeLastOr([1, 2, 3, 2], 2, []); // [1, 2, 3]
removeLastOr([1, 2, 3], 4, []); // []
```

```ts [data-last]
pipe([1, 2, 3, 2], removeLastOr(2, [])); // [1, 2, 3]
pipe([1, 2, 3], removeLastOr(4, [])); // []
```

:::
