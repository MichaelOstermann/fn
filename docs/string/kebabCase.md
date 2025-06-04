# kebabCase

`kebabCase(target)`

Converts `target` string to kebab-case format.

::: code-group

```ts [data-first]
kebabCase("hello world"); // "hello-world"
kebabCase("helloWorld"); // "hello-world"
```

```ts [data-last]
pipe("hello world", kebabCase()); // "hello-world"
pipe("helloWorld", kebabCase()); // "hello-world"
```

:::
