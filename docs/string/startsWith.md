# startsWith

`startsWith(target, source)`

Checks if `target` string starts with `source` string.

::: code-group

```ts [data-first]
startsWith("hello world", "hello"); // true
startsWith("hello world", "world"); // false
```

```ts [data-last]
pipe("hello world", startsWith("hello")); // true
pipe("hello world", startsWith("world")); // false
```

:::
