# capitalize

`capitalize(target)`

Capitalizes the first letter of `target` string.

::: code-group

```ts [data-first]
capitalize("hello world"); // "Hello world"
capitalize("hello"); // "Hello"
```

```ts [data-last]
pipe("hello world", capitalize()); // "Hello world"
pipe("hello", capitalize()); // "Hello"
```

:::
