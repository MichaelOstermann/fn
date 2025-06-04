# replace

`replace(target, search, replace)`

Replaces the first occurrence of `search` string or regular expression in `target` string with `replace` string.

::: code-group

```ts [data-first]
replace("hello world", "world", "universe"); // "hello universe"
replace("hello world", /o/g, "0"); // "hell0 w0rld"
```

```ts [data-last]
pipe("hello world", replace("world", "universe")); // "hello universe"
pipe("hello world", replace(/o/g, "0")); // "hell0 w0rld"
```

:::
