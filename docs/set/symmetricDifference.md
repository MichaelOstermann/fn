# symmetricDifference

`symmetricDifference(target, source)`

Returns a new set containing values that exist in either the `target` set or the `source` set, but not in both (exclusive or).

::: code-group

```ts [data-first]
symmetricDifference(new Set([1, 2, 3]), new Set([3, 4, 5])); // Set([1, 2, 4, 5])
symmetricDifference(new Set([1, 2]), new Set([3, 4])); // Set([1, 2, 3, 4])
```

```ts [data-last]
pipe(new Set([1, 2, 3]), symmetricDifference(new Set([3, 4, 5]))); // Set([1, 2, 4, 5])
pipe(new Set([1, 2]), symmetricDifference(new Set([3, 4]))); // Set([1, 2, 3, 4])
```

:::
