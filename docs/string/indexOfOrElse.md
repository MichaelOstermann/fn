# indexOfOrElse

`indexOfOrElse(target, source, orElse)`

Returns the index of the first occurrence of `source` string in `target` string, or the result of calling `orElse` function with `target` if not found.

::: code-group

```ts [data-first]
indexOfOrElse("hello world", "world", () => -1); // 6
indexOfOrElse("hello world", "foo", (str) => str.length); // 11
```

```ts [data-last]
pipe(
    "hello world",
    indexOfOrElse("world", () => -1),
); // 6

pipe(
    "hello world",
    indexOfOrElse("foo", (str) => str.length),
); // 11
```

:::
