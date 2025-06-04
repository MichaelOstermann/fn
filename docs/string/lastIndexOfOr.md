# lastIndexOfOr

`lastIndexOfOr(target, source, or)`

Returns the index of the last occurrence of `source` string in `target` string, or the `or` value if not found.

::: code-group

```ts [data-first]
lastIndexOfOr("hello world hello", "hello", -1); // 12
lastIndexOfOr("hello world", "foo", -1); // -1
```

```ts [data-last]
pipe("hello world hello", lastIndexOfOr("hello", -1)); // 12
pipe("hello world", lastIndexOfOr("foo", -1)); // -1
```

:::
