# lastIndexOfOrThrow

`lastIndexOfOrThrow(target, value)`

Returns the index of the last occurrence of `value` in `target`. If `value` is not found, throws an error.

::: code-group

```ts [data-first]
lastIndexOfOrThrow([1, 2, 3, 2], 2); // 3
lastIndexOfOrThrow([1, 2, 3], 4); // throws FnError
```

```ts [data-last]
pipe([1, 2, 3, 2], lastIndexOfOrThrow(2)); // 3
pipe([1, 2, 3], lastIndexOfOrThrow(4)); // throws FnError
```

:::
