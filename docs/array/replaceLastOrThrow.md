# replaceLastOrThrow

`replaceLastOrThrow(target, value, replacement)`

Replaces the last occurrence of `value` in `target` with `replacement`. If `value` is not found, throws an error.

::: code-group

```ts [data-first]
replaceLastOrThrow([1, 2, 3, 2], 2, 9); // [1, 2, 3, 9]
replaceLastOrThrow([1, 2, 3], 4, 9); // throws FnError
```

```ts [data-last]
pipe([1, 2, 3, 2], replaceLastOrThrow(2, 9)); // [1, 2, 3, 9]
pipe([1, 2, 3], replaceLastOrThrow(4, 9)); // throws FnError
```

:::
