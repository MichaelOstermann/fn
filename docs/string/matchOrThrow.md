# matchOrThrow

`matchOrThrow(target, source)`

Returns the result of matching `target` string against `source` string or regular expression, or throws an error if no match is found.

::: code-group

```ts [data-first]
matchOrThrow("hello world", "world"); // ["world", index: 6, input: "hello world", groups: undefined]
matchOrThrow("hello world", /\d+/); // throws FnError
```

```ts [data-last]
pipe("hello world", matchOrThrow("world")); // ["world", index: 6, input: "hello world", groups: undefined]
pipe("hello world", matchOrThrow(/\d+/)); // throws FnError
```

:::
