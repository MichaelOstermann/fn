# padEnd

`padEnd(target, length, fill)`

Pads `target` string from the end with `fill` string until the result reaches the specified `length`.

::: code-group

```ts [data-first]
padEnd("hello", 10, " "); // "hello     "
```

```ts [data-last]
pipe("hello", padEnd(10, " ")); // "hello     "
```

:::
