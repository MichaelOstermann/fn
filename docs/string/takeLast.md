# takeLast

`takeLast(target, amount)`

Takes the last `amount` characters from `target` string.

::: code-group

```ts [data-first]
takeLast("hello world", 5); // "world"
```

```ts [data-last]
pipe("hello world", takeLast(5)); // "world"
```

:::
