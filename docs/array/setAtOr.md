# setAtOr

`setAtOr(target, idx, value, or)`

Sets the value at the specified `idx` in `target` to `value`. If the index is out of bounds, returns `or`.

::: code-group

```ts [data-first]
setAtOr([1, 2, 3], 1, 9, []); // [1, 9, 3]
setAtOr([1, 2, 3], -1, 9, []); // [1, 2, 9]
setAtOr([1, 2, 3], 5, 9, []); // []
```

```ts [data-last]
pipe([1, 2, 3], setAtOr(1, 9, [])); // [1, 9, 3]
pipe([1, 2, 3], setAtOr(-1, 9, [])); // [1, 2, 9]
pipe([1, 2, 3], setAtOr(5, 9, [])); // []
```

:::
