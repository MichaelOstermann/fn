# mul

`mul(target, source)`

Multiplies `target` by `source` and returns the result.

::: code-group

```ts [data-first]
mul(5, 3); // 15
mul(7, 2); // 14
```

```ts [data-last]
pipe(5, mul(3)); // 15
pipe(7, mul(2)); // 14
```

:::
