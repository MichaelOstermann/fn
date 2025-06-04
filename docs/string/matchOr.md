# matchOr

`matchOr(target, source, or)`

Returns the result of matching `target` string against `source` string or regular expression, or the `or` value if no match is found.

::: code-group

```ts [data-first]
matchOr("hello world", "world", []); // ["world", index: 6, input: "hello world", groups: undefined]
matchOr("hello world", /\d+/, []); // []
```

```ts [data-last]
pipe("hello world", matchOr("world", [])); // ["world", index: 6, input: "hello world", groups: undefined]
pipe("hello world", matchOr(/\d+/, [])); // []
```

:::
