# parseIntOr

`parseIntOr(target, or)`

Parses `target` string and returns an integer, or the `or` value if parsing fails.

::: code-group

```ts [data-first]
parseIntOr("42", 0); // 42
parseIntOr("abc", 0); // 0
```

```ts [data-last]
pipe("42", parseIntOr(0)); // 42
pipe("abc", parseIntOr(0)); // 0
```

:::
