# removeAt

`removeAt(target, idx)`

Removes the element at index `idx` from `target` array. Supports negative indices to count from the end. If the index is out of bounds, returns the original array unchanged.

::: code-group

```ts [data-first]
removeAt([1, 2, 3, 4], 1); // [1, 3, 4]
```

```ts [data-last]
pipe([1, 2, 3, 4], removeAt(1)); // [1, 3, 4]
```

:::
