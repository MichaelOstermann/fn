# addAll

`addAll(target, values)`

Adds all `values` from an iterable to the `target` set and returns a new set.

::: code-group

```ts [data-first]
addAll(new Set([1, 2]), [3, 4]); // Set([1, 2, 3, 4])
addAll(new Set([1, 2]), [2, 3]); // Set([1, 2, 3])
```

```ts [data-last]
pipe(new Set([1, 2]), addAll([3, 4])); // Set([1, 2, 3, 4])
pipe(new Set([1, 2]), addAll([2, 3])); // Set([1, 2, 3])
```

:::
