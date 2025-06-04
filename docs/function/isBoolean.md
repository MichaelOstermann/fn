# isBoolean

`isBoolean(target)`

Checks if a value is a boolean.

::: code-group

```ts [data-first]
isBoolean(true); // true
isBoolean("true"); // false
```

```ts [data-last]
pipe(true, isBoolean()); // true
pipe("true", isBoolean()); // false
```

:::
