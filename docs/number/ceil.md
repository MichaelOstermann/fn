# ceil

`ceil(target)`

Returns the smallest integer greater than or equal to `target`.

::: code-group

```ts [data-first]
ceil(4.3); // 5
ceil(-4.7); // -4
```

```ts [data-last]
pipe(4.3, ceil()); // 5
pipe(-4.7, ceil()); // -4
```

:::
