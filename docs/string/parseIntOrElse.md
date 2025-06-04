# parseIntOrElse

`parseIntOrElse(target, orElse)`

Parses `target` string and returns an integer, or the result of calling `orElse` function with `target` if parsing fails.

::: code-group

```ts [data-first]
parseIntOrElse("42", () => 0); // 42
parseIntOrElse("abc", (str) => str.length); // 3
```

```ts [data-last]
pipe(
    "42",
    parseIntOrElse(() => 0),
); // 42

pipe(
    "abc",
    parseIntOrElse((str) => str.length),
); // 3
```

:::
