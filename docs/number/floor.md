# floor

`floor(target)`

Returns the largest integer less than or equal to `target`.

::: code-group

```ts [data-first]
floor(4.7); // 4
floor(-4.3); // -5
```

```ts [data-last]
pipe(4.7, floor()); // 4
pipe(-4.3, floor()); // -5
```

:::
