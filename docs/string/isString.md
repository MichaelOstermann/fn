# isString

`isString(target)`

Checks if `target` is a string.

::: code-group

```ts [data-first]
isString("hello"); // true
isString(123); // false
isString(null); // false
```

```ts [data-last]
pipe("hello", isString()); // true
pipe(123, isString()); // false
pipe(null, isString()); // false
```

:::
