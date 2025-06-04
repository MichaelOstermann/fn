# hasNone

`hasNone(target, values)`

Checks if the `target` set contains none of the specified `values` from an iterable. Returns `true` if no values exist in the set, `false` otherwise.

::: code-group

```ts [data-first]
hasNone(new Set([1, 2, 3]), [4, 5]); // true
hasNone(new Set([1, 2, 3]), [3, 4]); // false
```

```ts [data-last]
pipe(new Set([1, 2, 3]), hasNone([4, 5])); // true
pipe(new Set([1, 2, 3]), hasNone([3, 4])); // false
```

:::
