# isEmpty

`isEmpty(target)`

Checks if the `target` set is empty (contains no values). Returns `true` if the set has no elements, `false` otherwise.

::: code-group

```ts [data-first]
isEmpty(new Set()); // true
isEmpty(new Set([1, 2, 3])); // false
```

```ts [data-last]
pipe(new Set(), isEmpty()); // true
pipe(new Set([1, 2, 3]), isEmpty()); // false
```

:::
