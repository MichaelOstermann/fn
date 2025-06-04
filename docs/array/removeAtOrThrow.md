# removeAtOrThrow

`removeAtOrThrow(target, idx)`

Removes the element at index `idx` from `target` array. Supports negative indices to count from the end. If the index is out of bounds, throws an error.

::: code-group

```ts [data-first]
removeAtOrThrow([1, 2, 3], 1); // [1, 3]
```

```ts [data-last]
pipe([1, 2, 3], removeAtOrThrow(1)); // [1, 3]
```

:::
