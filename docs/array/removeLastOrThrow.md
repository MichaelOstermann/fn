# removeLastOrThrow

`removeLastOrThrow(target, value)`

Removes the last occurrence of `value` from `target` array. If the value is not found, throws an error.

::: code-group

```ts [data-first]
removeLastOrThrow([1, 2, 3, 2], 2); // [1, 2, 3]
removeLastOrThrow([1, 2, 3], 4); // throws FnError
```

```ts [data-last]
pipe([1, 2, 3, 2], removeLastOrThrow(2)); // [1, 2, 3]
pipe([1, 2, 3], removeLastOrThrow(4)); // throws FnError
```

:::
