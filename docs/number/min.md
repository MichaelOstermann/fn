# min

`min(target, source)`

Returns the smaller of `target` and `source`.

::: code-group

```ts [data-first]
min(5, 3); // 3
min(2, 7); // 2
min(4, 4); // 4
```

```ts [data-last]
pipe(5, min(3)); // 3
pipe(2, min(7)); // 2
pipe(4, min(4)); // 4
```

:::
