# gt

`gt(target, source)`

Returns `true` if `target` is greater than `source`, otherwise `false`.

::: code-group

```ts [data-first]
gt(5, 3); // true
gt(2, 7); // false
gt(4, 4); // false
```

```ts [data-last]
pipe(5, gt(3)); // true
pipe(2, gt(7)); // false
pipe(4, gt(4)); // false
```

:::
