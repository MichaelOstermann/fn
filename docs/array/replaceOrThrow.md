# replaceOrThrow

`replaceOrThrow(target, value, replacement)`

Replaces the first occurrence of `value` in `target` with `replacement`. If `value` is not found, throws an error.

::: code-group

```ts [data-first]
replaceOrThrow([1, 2, 3, 2], 2, 9); // [1, 9, 3, 2]
replaceOrThrow([1, 2, 3], 4, 9); // throws FnError
```

```ts [data-last]
pipe([1, 2, 3, 2], replaceOrThrow(2, 9)); // [1, 9, 3, 2]
pipe([1, 2, 3], replaceOrThrow(4, 9)); // throws FnError
```

:::
