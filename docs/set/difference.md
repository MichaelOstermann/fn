# difference

`difference(target, source)`

Returns a new set containing all values from the `target` set that are not present in the `source` set.

::: code-group

```ts [data-first]
difference(new Set([1, 2, 3]), new Set([2, 3, 4])); // Set([1])
difference(new Set([1, 2]), new Set([3, 4])); // Set([1, 2])
```

```ts [data-last]
pipe(new Set([1, 2, 3]), difference(new Set([2, 3, 4]))); // Set([1])
pipe(new Set([1, 2]), difference(new Set([3, 4]))); // Set([1, 2])
```

:::
