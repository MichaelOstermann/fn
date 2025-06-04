# add

`add(target, value)`

Adds a `value` to the `target` set and returns a new set.

::: code-group

```ts [data-first]
add(new Set([1, 2]), 3); // Set([1, 2, 3])
add(new Set([1, 2]), 2); // Set([1, 2])
```

```ts [data-last]
pipe(new Set([1, 2]), add(3)); // Set([1, 2, 3])
pipe(new Set([1, 2]), add(2)); // Set([1, 2])
```

:::
