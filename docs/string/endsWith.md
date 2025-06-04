# endsWith

`endsWith(target, source)`

Checks if `target` string ends with `source` string.

::: code-group

```ts [data-first]
endsWith("hello world", "world"); // true
```

```ts [data-last]
pipe("hello world", endsWith("world")); // true
```

:::
