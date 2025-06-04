# clamp

`clamp(value, min, max)`

Constrains `value` to be between `min` and `max` (inclusive).

::: code-group

```ts [data-first]
clamp(10, 0, 5); // 5
clamp(-2, 0, 5); // 0
clamp(3, 0, 5); // 3
```

```ts [data-last]
pipe(10, clamp(0, 5)); // 5
pipe(-2, clamp(0, 5)); // 0
pipe(3, clamp(0, 5)); // 3
```

:::
