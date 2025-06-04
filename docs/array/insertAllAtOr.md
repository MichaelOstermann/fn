# insertAllAtOr

`insertAllAtOr(target, idx, values, or)`

Inserts all `values` at the specified `idx` in `target`. If the index is out of bounds, returns `or`. Supports iterables.

::: code-group

```ts [data-first]
insertAllAtOr([1, 2, 3], 1, [8, 9], []); // [1, 8, 9, 2, 3]
insertAllAtOr([1, 2, 3], 5, [8, 9], []); // []
```

```ts [data-last]
pipe([1, 2, 3], insertAllAtOr(1, [8, 9], [])); // [1, 8, 9, 2, 3]
pipe([1, 2, 3], insertAllAtOr(5, [8, 9], [])); // []
```

:::
