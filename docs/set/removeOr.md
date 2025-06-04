# removeOr

`removeOr(target, value, or)`

Removes a `value` from the `target` set and returns a new set. If the value doesn't exist in the set, returns the `or` value instead.

::: code-group

```ts [data-first]
removeOr(new Set([1, 2, 3]), 2, null); // Set([1, 3])
removeOr(new Set([1, 2, 3]), 4, null); // null
```

```ts [data-last]
pipe(new Set([1, 2, 3]), removeOr(2, null)); // Set([1, 3])
pipe(new Set([1, 2, 3]), removeOr(4, null)); // null
```

:::
