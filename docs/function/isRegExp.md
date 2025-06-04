# isRegExp

`isRegExp(target)`

Checks if a value is a RegExp instance.

::: code-group

```ts [data-first]
isRegExp(/hello/); // true
isRegExp("hello"); // false
```

```ts [data-last]
pipe(/hello/, isRegExp()); // true
pipe("hello", isRegExp()); // false
```

:::
