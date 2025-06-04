# camelCase

`camelCase(target)`

Converts `target` string to camelCase format.

::: code-group

```ts [data-first]
camelCase("hello world"); // "helloWorld"
camelCase("hello-world"); // "helloWorld"
```

```ts [data-last]
pipe("hello world", camelCase()); // "helloWorld"
pipe("hello-world", camelCase()); // "helloWorld"
```

:::
