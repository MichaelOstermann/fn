# take

`take(target, amount)`

Takes the first `amount` characters from `target` string.

::: code-group

```ts [data-first]
take("hello world", 5); // "hello"
```

```ts [data-last]
pipe("hello world", take(5)); // "hello"
```

:::
