# max

`max(target, source)`

Returns the larger of `target` and `source`.

::: code-group

```ts [data-first]
max(5, 3); // 5
max(2, 7); // 7
max(4, 4); // 4
```

```ts [data-last]
pipe(5, max(3)); // 5
pipe(2, max(7)); // 7
pipe(4, max(4)); // 4
```

:::
