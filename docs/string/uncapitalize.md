# uncapitalize

`uncapitalize(target)`

Uncapitalizes the first letter of `target` string.

::: code-group

```ts [data-first]
uncapitalize("Hello World"); // "hello World"
uncapitalize("Hello"); // "hello"
```

```ts [data-last]
pipe("Hello World", uncapitalize()); // "hello World"
pipe("Hello", uncapitalize()); // "hello"
```

:::
