# sub

`sub(target, source)`

Subtracts `source` from `target` and returns the result.

::: code-group

```ts [data-first]
sub(10, 3); // 7
sub(5, 8); // -3
```

```ts [data-last]
pipe(10, sub(3)); // 7
pipe(5, sub(8)); // -3
```

:::
