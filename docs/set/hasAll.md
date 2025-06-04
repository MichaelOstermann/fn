# hasAll

`hasAll(target, values)`

Checks if the `target` set contains all of the specified `values` from an iterable. Returns `true` if all values exist, `false` otherwise.

::: code-group

```ts [data-first]
hasAll(new Set([1, 2, 3]), [1, 2]); // true
hasAll(new Set([1, 2, 3]), [1, 4]); // false
```

```ts [data-last]
pipe(new Set([1, 2, 3]), hasAll([1, 2])); // true
pipe(new Set([1, 2, 3]), hasAll([1, 4])); // false
```

:::
