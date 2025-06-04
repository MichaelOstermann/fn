# isDisjointFrom

`isDisjointFrom(target, source)`

Checks if the `target` set is disjoint from the `source` set (i.e., they share no common values). Returns `true` if the sets have no intersection, `false` otherwise.

::: code-group

```ts [data-first]
isDisjointFrom(new Set([1, 2]), new Set([3, 4])); // true
isDisjointFrom(new Set([1, 2]), new Set([2, 3])); // false
```

```ts [data-last]
pipe(new Set([1, 2]), isDisjointFrom(new Set([3, 4]))); // true
pipe(new Set([1, 2]), isDisjointFrom(new Set([2, 3]))); // false
```

:::
