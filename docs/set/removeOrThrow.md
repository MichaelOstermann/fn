# removeOrThrow

`removeOrThrow(target, value)`

Removes a `value` from the `target` set and returns a new set. If the value doesn't exist in the set, throws an error.

::: code-group

```ts [data-first]
removeOrThrow(new Set([1, 2, 3]), 2); // Set([1, 3])
removeOrThrow(new Set([1, 2, 3]), 4); // throws FnError
```

```ts [data-last]
pipe(new Set([1, 2, 3]), removeOrThrow(2)); // Set([1, 3])
pipe(new Set([1, 2, 3]), removeOrThrow(4)); // throws FnError
```

:::
