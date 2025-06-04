# trimStart

`trimStart(target)`

Removes whitespace from the start of `target` string.

::: code-group

```ts [data-first]
trimStart("  hello world  "); // "hello world  "
```

```ts [data-last]
pipe("  hello world  ", trimStart()); // "hello world  "
```

:::
