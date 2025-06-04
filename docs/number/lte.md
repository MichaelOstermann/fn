# lte

`lte(target, source)`

Returns `true` if `target` is less than or equal to `source`, otherwise `false`.

::: code-group

```ts [data-first]
lte(3, 5); // true
lte(7, 2); // false
lte(4, 4); // true
```

```ts [data-last]
pipe(3, lte(5)); // true
pipe(7, lte(2)); // false
pipe(4, lte(4)); // true
```

:::
