# replaceOr

`replaceOr(target, value, replacement, or)`

Replaces the first occurrence of `value` in `target` with `replacement`. If `value` is not found, returns `or`.

::: code-group

```ts [data-first]
replaceOr([1, 2, 3, 2], 2, 9, []); // [1, 9, 3, 2]
replaceOr([1, 2, 3], 4, 9, []); // []
```

```ts [data-last]
pipe([1, 2, 3, 2], replaceOr(2, 9, [])); // [1, 9, 3, 2]
pipe([1, 2, 3], replaceOr(4, 9, [])); // []
```

:::
