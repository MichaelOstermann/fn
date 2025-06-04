# lastIndexOfOrElse

`lastIndexOfOrElse(target, source, orElse)`

Returns the index of the last occurrence of `source` string in `target` string, or the result of calling `orElse` function with `target` if not found.

::: code-group

```ts [data-first]
lastIndexOfOrElse("hello world hello", "hello", () => -1); // 12
lastIndexOfOrElse("hello world", "foo", (str) => str.length); // 11
```

```ts [data-last]
pipe(
    "hello world hello",
    lastIndexOfOrElse("hello", () => -1),
); // 12

pipe(
    "hello world",
    lastIndexOfOrElse("foo", (str) => str.length),
); // 11
```

:::
