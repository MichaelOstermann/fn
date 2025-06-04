# pascalCase

`pascalCase(target)`

Converts `target` string to PascalCase format.

::: code-group

```ts [data-first]
pascalCase("hello world"); // "HelloWorld"
pascalCase("hello-world"); // "HelloWorld"
```

```ts [data-last]
pipe("hello world", pascalCase()); // "HelloWorld"
pipe("hello-world", pascalCase()); // "HelloWorld"
```

:::
