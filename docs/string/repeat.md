# repeat

`repeat(target, amount)`

Repeats `target` string `amount` times.

::: code-group

```ts [data-first]
repeat("hello", 3); // "hellohellohello"
```

```ts [data-last]
pipe("hello", repeat(3)); // "hellohellohello"
```

:::
