# constantCase

`constantCase(target)`

Converts `target` string to CONSTANT_CASE format.

::: code-group

```ts [data-first]
constantCase("hello world"); // "HELLO_WORLD"
constantCase("helloWorld"); // "HELLO_WORLD"
```

```ts [data-last]
pipe("hello world", constantCase()); // "HELLO_WORLD"
pipe("helloWorld", constantCase()); // "HELLO_WORLD"
```

:::
