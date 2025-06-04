# gte

`gte(target, source)`

Returns `true` if `target` is greater than or equal to `source`, otherwise `false`.

::: code-group

```ts [data-first]
gte(5, 3); // true
gte(2, 7); // false
gte(4, 4); // true
```

```ts [data-last]
pipe(5, gte(3)); // true
pipe(2, gte(7)); // false
pipe(4, gte(4)); // true
```

:::
