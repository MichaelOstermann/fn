# indexOf

`indexOf(target, source)`

Returns the index of the first occurrence of `source` string in `target` string, or -1 if not found.

::: code-group

```ts [data-first]
indexOf("hello world", "world"); // 6
```

```ts [data-last]
pipe("hello world", indexOf("world")); // 6
```

:::
