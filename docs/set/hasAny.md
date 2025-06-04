# hasAny

`hasAny(target, values)`

Checks if the `target` set contains any of the specified `values` from an iterable. Returns `true` if at least one value exists, `false` otherwise.

::: code-group

```ts [data-first]
hasAny(new Set([1, 2, 3]), [3, 4]); // true
hasAny(new Set([1, 2, 3]), [4, 5]); // false
```

```ts [data-last]
pipe(new Set([1, 2, 3]), hasAny([3, 4])); // true
pipe(new Set([1, 2, 3]), hasAny([4, 5])); // false
```

:::
