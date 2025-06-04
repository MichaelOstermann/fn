# parseInt

`parseInt(target)`

Parses `target` string and returns an integer.

::: code-group

```ts [data-first]
parseInt("42"); // 42
parseInt("42.5"); // 42
```

```ts [data-last]
pipe("42", parseInt()); // 42
pipe("42.5", parseInt()); // 42
```

:::
