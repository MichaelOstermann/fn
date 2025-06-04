# insertAllAtOrThrow

`insertAllAtOrThrow(target, idx, values)`

Inserts all `values` at the specified `idx` in `target`. If the index is out of bounds, throws an error. Supports iterables.

::: code-group

```ts [data-first]
insertAllAtOrThrow([1, 2, 3], 1, [8, 9]); // [1, 8, 9, 2, 3]
insertAllAtOrThrow([1, 2, 3], 5, [8, 9]); // throws FnError
```

```ts [data-last]
pipe([1, 2, 3], insertAllAtOrThrow(1, [8, 9])); // [1, 8, 9, 2, 3]
pipe([1, 2, 3], insertAllAtOrThrow(5, [8, 9])); // throws FnError
```

:::
