# size

`size(target)`

Returns the number of values in the `target` set.

::: code-group

```ts [data-first]
size(new Set([1, 2, 3])); // 3
size(new Set()); // 0
```

```ts [data-last]
pipe(new Set([1, 2, 3]), size()); // 3
pipe(new Set(), size()); // 0
```

:::
