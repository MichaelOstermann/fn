# atOrThrow

`atOrThrow(array, offset)`

Returns the value at the specified `offset`, throws an exception if the `offset` was out of range, or the retrieved value was nullable.

::: code-group

```ts [data-first]
atOrThrow([1, null], -1); // Error
```

```ts [data-last]
pipe([1, null], atOrThrow(-1)); // Error
```

:::
