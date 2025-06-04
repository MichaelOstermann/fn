# removeOrThrow

`removeOrThrow(target, value)`

Removes the first occurrence of `value` from `target` array. If the value is not found, throws an error.

::: code-group

```ts [data-first]
removeOrThrow([1, 2, 3, 2], 2); // [1, 3, 2]
removeOrThrow([1, 2, 3], 4); // throws FnError
```

```ts [data-last]
pipe([1, 2, 3, 2], removeOrThrow(2)); // [1, 3, 2]
pipe([1, 2, 3], removeOrThrow(4)); // throws FnError
```

:::
