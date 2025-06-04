# exp

`exp(target, source)`

Raises `target` to the power of `source` and returns the result.

::: code-group

```ts [data-first]
exp(2, 3); // 8
exp(5, 2); // 25
```

```ts [data-last]
pipe(2, exp(3)); // 8
pipe(5, exp(2)); // 25
```

:::
