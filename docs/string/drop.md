# drop

`drop(target, amount)`

Removes the first `amount` characters from `target` string.

::: code-group

```ts [data-first]
drop("hello world", 6); // "world"
```

```ts [data-last]
pipe("hello world", drop(6)); // "world"
```

:::
