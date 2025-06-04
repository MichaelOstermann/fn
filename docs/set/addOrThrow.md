# addOrThrow

`addOrThrow(target, value)`

Adds a `value` to the `target` set and returns a new set. If the value already exists in the set, throws an error.

::: code-group

```ts [data-first]
addOrThrow(new Set([1, 2]), 3); // Set([1, 2, 3])
addOrThrow(new Set([1, 2]), 2); // throws FnError
```

```ts [data-last]
pipe(new Set([1, 2]), addOrThrow(3)); // Set([1, 2, 3])
pipe(new Set([1, 2]), addOrThrow(2)); // throws FnError
```

:::
