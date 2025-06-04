# match

`match(target, source)`

Returns the result of matching `target` string against `source` string or regular expression, or null if no match is found.

::: code-group

```ts [data-first]
match("hello world", "world"); // ["world", index: 6, input: "hello world", groups: undefined]
match("hello world", /\d+/); // null
```

```ts [data-last]
pipe("hello world", match("world")); // ["world", index: 6, input: "hello world", groups: undefined]
pipe("hello world", match(/\d+/)); // null
```

:::
