# indexOfOr

`indexOfOr(target, source, or)`

Returns the index of the first occurrence of `source` string in `target` string, or the `or` value if not found.

::: code-group

```ts [data-first]
indexOfOr("hello world", "world", -1); // 6
indexOfOr("hello world", "foo", -1); // -1
```

```ts [data-last]
pipe("hello world", indexOfOr("world", -1)); // 6
pipe("hello world", indexOfOr("foo", -1)); // -1
```

:::
