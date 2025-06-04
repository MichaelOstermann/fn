# lastIndexOf

`lastIndexOf(target, source)`

Returns the index of the last occurrence of `source` string in `target` string, or -1 if not found.

::: code-group

```ts [data-first]
lastIndexOf("hello world hello", "hello"); // 12
```

```ts [data-last]
pipe("hello world hello", lastIndexOf("hello")); // 12
```

:::
