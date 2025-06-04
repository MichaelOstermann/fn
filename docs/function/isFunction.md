# isFunction

`isFunction(target)`

Checks if a value is a function.

::: code-group

```ts [data-first]
isFunction(() => {}); // true
isFunction("not a function"); // false
```

```ts [data-last]
pipe(() => {}, isFunction()); // true
pipe("not a function", isFunction()); // false
```

:::
