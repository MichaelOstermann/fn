# isSupersetOf

`isSupersetOf(target, source)`

Checks if the `target` set is a superset of the `source` set (i.e., all values in source exist in target). Returns `true` if target is a superset of source, `false` otherwise.

::: code-group

```ts [data-first]
isSupersetOf(new Set([1, 2, 3]), new Set([1, 2])); // true
isSupersetOf(new Set([1, 2, 3]), new Set([1, 4])); // false
```

```ts [data-last]
pipe(new Set([1, 2, 3]), isSupersetOf(new Set([1, 2]))); // true
pipe(new Set([1, 2, 3]), isSupersetOf(new Set([1, 4]))); // false
```

:::
