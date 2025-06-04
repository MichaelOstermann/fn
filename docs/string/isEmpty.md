# isEmpty

`isEmpty(target)`

Checks if `target` string is empty.

::: code-group

```ts [data-first]
isEmpty(""); // true
isEmpty("hello"); // false
```

```ts [data-last]
pipe("", isEmpty()); // true
pipe("hello", isEmpty()); // false
```

:::
