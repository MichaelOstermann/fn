# indexOfOrThrow

`indexOfOrThrow(target, value)`

Returns the index of the first occurrence of `value` in `target`. If `value` is not found, throws an error.

::: code-group

```ts [data-first]
indexOfOrThrow([1, 2, 3, 2], 2); // 1
indexOfOrThrow([1, 2, 3], 4); // throws FnError
```

```ts [data-last]
pipe([1, 2, 3, 2], indexOfOrThrow(2)); // 1
pipe([1, 2, 3], indexOfOrThrow(4)); // throws FnError
```

:::
