# matchOrElse

`matchOrElse(target, source, orElse)`

Returns the result of matching `target` string against `source` string or regular expression, or the result of calling `orElse` function with `target` if no match is found.

::: code-group

```ts [data-first]
matchOrElse("hello world", "world", () => []); // ["world", index: 6, input: "hello world", groups: undefined]
matchOrElse("hello world", /\d+/, (str) => [str]); // ["hello world"]
```

```ts [data-last]
pipe(
    "hello world",
    matchOrElse("world", () => []),
); // ["world", index: 6, input: "hello world", groups: undefined]

pipe(
    "hello world",
    matchOrElse(/\d+/, (str) => [str]),
); // ["hello world"]
```

:::
