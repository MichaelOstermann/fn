# parseIntOrThrow

`parseIntOrThrow(target)`

Parses `target` string and returns an integer, or throws an error if parsing fails.

::: code-group

```ts [data-first]
parseIntOrThrow("42"); // 42
parseIntOrThrow("abc"); // throws FnError
```

```ts [data-last]
pipe("42", parseIntOrThrow()); // 42
pipe("abc", parseIntOrThrow()); // throws FnError
```

:::
