# trim

`trim(target)`

Removes whitespace from both ends of `target` string.

::: code-group

```ts [data-first]
trim("  hello world  "); // "hello world"
```

```ts [data-last]
pipe("  hello world  ", trim()); // "hello world"
```

:::
