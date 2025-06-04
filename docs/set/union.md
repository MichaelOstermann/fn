# union

`union(target, source)`

Returns a new set containing all unique values from both the `target` set and the `source` set.

::: code-group

```ts [data-first]
union(new Set([1, 2]), new Set([2, 3, 4])); // Set([1, 2, 3, 4])
union(new Set([1, 2]), new Set([3, 4])); // Set([1, 2, 3, 4])
```

```ts [data-last]
pipe(new Set([1, 2]), union(new Set([2, 3, 4]))); // Set([1, 2, 3, 4])
pipe(new Set([1, 2]), union(new Set([3, 4]))); // Set([1, 2, 3, 4])
```

:::
