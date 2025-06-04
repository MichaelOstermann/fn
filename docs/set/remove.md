# remove

`remove(target, value)`

Removes a `value` from the `target` set and returns a new set.

::: code-group

```ts [data-first]
remove(new Set([1, 2, 3]), 2); // Set([1, 3])
remove(new Set([1, 2, 3]), 4); // Set([1, 2, 3])
```

```ts [data-last]
pipe(new Set([1, 2, 3]), remove(2)); // Set([1, 3])
pipe(new Set([1, 2, 3]), remove(4)); // Set([1, 2, 3])
```

:::
