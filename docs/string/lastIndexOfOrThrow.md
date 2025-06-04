# lastIndexOfOrThrow

`lastIndexOfOrThrow(target, source)`

Returns the index of the last occurrence of `source` string in `target` string, or throws an error if not found.

::: code-group

```ts [data-first]
lastIndexOfOrThrow("hello world hello", "hello"); // 12
lastIndexOfOrThrow("hello world", "foo"); // throws FnError
```

```ts [data-last]
pipe("hello world hello", lastIndexOfOrThrow("hello")); // 12
pipe("hello world", lastIndexOfOrThrow("foo")); // throws FnError
```

:::
