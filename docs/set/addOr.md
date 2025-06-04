# addOr

`addOr(target, value, or)`

Adds a `value` to the `target` set and returns a new set. If the value already exists in the set, returns the `or` value instead.

::: code-group

```ts [data-first]
addOr(new Set([1, 2]), 3, null); // Set([1, 2, 3])
addOr(new Set([1, 2]), 2, null); // null
```

```ts [data-last]
pipe(new Set([1, 2]), addOr(3, null)); // Set([1, 2, 3])
pipe(new Set([1, 2]), addOr(2, null)); // null
```

:::
