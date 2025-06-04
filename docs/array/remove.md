# remove

`remove(target, value)`

Removes the first occurrence of `value` from `target` array. If the value is not found, returns the original array unchanged.

::: code-group

```ts [data-first]
remove([1, 2, 3, 2], 2); // [1, 3, 2]
```

```ts [data-last]
pipe([1, 2, 3, 2], remove(2)); // [1, 3, 2]
```

:::
