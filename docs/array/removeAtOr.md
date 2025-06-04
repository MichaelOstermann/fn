# removeAtOr

`removeAtOr(target, idx, or)`

Removes the element at index `idx` from `target` array. Supports negative indices to count from the end. If the index is out of bounds, returns the fallback value `or`.

::: code-group

```ts [data-first]
removeAtOr([1, 2, 3], 1, []); // [1, 3]
removeAtOr([1, 2, 3], 5, []); // []
```

```ts [data-last]
pipe([1, 2, 3], removeAtOr(1, [])); // [1, 3]
pipe([1, 2, 3], removeAtOr(5, [])); // []
```

:::
