# atOrElse

`atOrElse(array, offset, fallback)`

Returns the value at the specified `offset`. Calls `fallback` if the `offset` was out of range, or the retrieved value was nullable.

::: code-group

```ts [data-first]
atOrElse([1, null], -1, (array) => array.length); // 2
```

```ts [data-last]
pipe(
    [1, null],
    atOrElse(-1, (array) => array.length),
); // 2
```

:::
