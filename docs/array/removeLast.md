# removeLast

`removeLast(target, value)`

Removes the last occurrence of `value` from `target` array. If the value is not found, returns the original array unchanged.

::: code-group

```ts [data-first]
removeLast([1, 2, 3, 2], 2); // [1, 2, 3]
```

```ts [data-last]
pipe([1, 2, 3, 2], removeLast(2)); // [1, 2, 3]
```

:::
