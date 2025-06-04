# has

`has(target, source)`

Checks if `target` string contains `source` string.

::: code-group

```ts [data-first]
has("hello world", "world"); // true
```

```ts [data-last]
pipe("hello world", has("world")); // true
```

:::
