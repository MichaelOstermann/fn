# trimEnd

`trimEnd(target)`

Removes whitespace from the end of `target` string.

::: code-group

```ts [data-first]
trimEnd("  hello world  "); // "  hello world"
```

```ts [data-last]
pipe("  hello world  ", trimEnd()); // "  hello world"
```

:::
