# setAtOrThrow

`setAtOrThrow(target, idx, value)`

Sets the value at the specified `idx` in `target` to `value`. If the index is out of bounds, throws an error.

::: code-group

```ts [data-first]
setAtOrThrow([1, 2, 3], 1, 9); // [1, 9, 3]
setAtOrThrow([1, 2, 3], -1, 9); // [1, 2, 9]
setAtOrThrow([1, 2, 3], 5, 9); // throws FnError
```

```ts [data-last]
pipe([1, 2, 3], setAtOrThrow(1, 9)); // [1, 9, 3]
pipe([1, 2, 3], setAtOrThrow(-1, 9)); // [1, 2, 9]
pipe([1, 2, 3], setAtOrThrow(5, 9)); // throws FnError
```

:::
