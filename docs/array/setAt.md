# setAt

`setAt(target, idx, value)`

Sets the value at the specified `idx` in `target` to `value`. Returns the original array if the index is out of bounds or the value is already the same.

::: code-group

```ts [data-first]
setAt([1, 2, 3], 1, 9); // [1, 9, 3]
setAt([1, 2, 3], -1, 9); // [1, 2, 9]
setAt([1, 2, 3], 5, 9); // [1, 2, 3]
```

```ts [data-last]
pipe([1, 2, 3], setAt(1, 9)); // [1, 9, 3]
pipe([1, 2, 3], setAt(-1, 9)); // [1, 2, 9]
pipe([1, 2, 3], setAt(5, 9)); // [1, 2, 3]
```

:::
