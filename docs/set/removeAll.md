# removeAll

`removeAll(target, values)`

Removes all `values` from an iterable from the `target` set and returns a new set. Only values that exist in the set are removed.

::: code-group

```ts [data-first]
removeAll(new Set([1, 2, 3, 4]), [2, 3]); // Set([1, 4])
removeAll(new Set([1, 2, 3]), [4, 5]); // Set([1, 2, 3])
```

```ts [data-last]
pipe(new Set([1, 2, 3, 4]), removeAll([2, 3])); // Set([1, 4])
pipe(new Set([1, 2, 3]), removeAll([4, 5])); // Set([1, 2, 3])
```

:::
