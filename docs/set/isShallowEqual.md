# isShallowEqual

`isShallowEqual(target, source)`

Checks if the `target` set and `source` set contain the same values. Returns `true` if both sets have the same size and contain identical elements, `false` otherwise.

::: code-group

```ts [data-first]
isShallowEqual(new Set([1, 2, 3]), new Set([3, 2, 1])); // true
isShallowEqual(new Set([1, 2]), new Set([1, 2, 3])); // false
```

```ts [data-last]
pipe(new Set([1, 2, 3]), isShallowEqual(new Set([3, 2, 1]))); // true
pipe(new Set([1, 2]), isShallowEqual(new Set([1, 2, 3]))); // false
```

:::
