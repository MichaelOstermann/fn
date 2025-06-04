# snakeCase

`snakeCase(target)`

Converts `target` string to snake_case format.

::: code-group

```ts [data-first]
snakeCase("hello world"); // "hello_world"
snakeCase("helloWorld"); // "hello_world"
```

```ts [data-last]
pipe("hello world", snakeCase()); // "hello_world"
pipe("helloWorld", snakeCase()); // "hello_world"
```

:::
