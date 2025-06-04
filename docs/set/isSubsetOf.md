# isSubsetOf

`isSubsetOf(target, source)`

Checks if the `target` set is a subset of the `source` set (i.e., all values in target exist in source). Returns `true` if target is a subset of source, `false` otherwise.

::: code-group

```ts [data-first]
isSubsetOf(new Set([1, 2]), new Set([1, 2, 3])); // true
isSubsetOf(new Set([1, 4]), new Set([1, 2, 3])); // false
```

```ts [data-last]
pipe(new Set([1, 2]), isSubsetOf(new Set([1, 2, 3]))); // true
pipe(new Set([1, 4]), isSubsetOf(new Set([1, 2, 3]))); // false
```

:::
