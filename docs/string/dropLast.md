# dropLast

`dropLast(target, amount)`

Removes the last `amount` characters from `target` string.

::: code-group

```ts [data-first]
dropLast("hello world", 6); // "hello"
```

```ts [data-last]
pipe("hello world", dropLast(6)); // "hello"
```

:::
