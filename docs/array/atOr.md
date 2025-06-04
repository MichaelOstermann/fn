# atOr

`atOr(array, offset, fallback)`

Returns the value at the specified `offset`. Returns `fallback` if the `offset` was out of range, or the retrieved value was nullable.

::: code-group

```ts [data-first]
atOr([1, null], -1, 2); // 2
```

```ts [data-last]
pipe([1, null], atOr(-1, 2)); // 2
```

:::
