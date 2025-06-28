# replaceAll

`replaceAll(target, search, replace)`

Replaces all occurrences of `search` string or regular expression in `target` string with `replace` string.

::: code-group

```ts [data-first]
replaceAll("hello world world", "world", "universe"); // "hello universe universe"
replaceAll("hello world", /o/g, "0"); // "hell0 w0rld"
```

```ts [data-last]
pipe("hello world world", replaceAll("world", "universe")); // "hello universe universe"
pipe("hello world", replaceAll(/o/g, "0")); // "hell0 w0rld"
```

:::
