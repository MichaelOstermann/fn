# intersection

`intersection(target, source)`

Returns a new set containing only the values that exist in both the `target` set and the `source` set.

::: code-group

```ts [data-first]
intersection(new Set([1, 2, 3]), new Set([2, 3, 4])); // Set([2, 3])
intersection(new Set([1, 2]), new Set([3, 4])); // Set([])
```

```ts [data-last]
pipe(new Set([1, 2, 3]), intersection(new Set([2, 3, 4]))); // Set([2, 3])
pipe(new Set([1, 2]), intersection(new Set([3, 4]))); // Set([])
```

:::
