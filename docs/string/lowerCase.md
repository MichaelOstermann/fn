# lowerCase

`lowerCase(target)`

Converts `target` string to lowercase.

::: code-group

```ts [data-first]
lowerCase("HELLO WORLD"); // "hello world"
lowerCase("Hello World"); // "hello world"
```

```ts [data-last]
pipe("HELLO WORLD", lowerCase()); // "hello world"
pipe("Hello World", lowerCase()); // "hello world"
```

:::
