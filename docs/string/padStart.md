# padStart

`padStart(target, length, fill)`

Pads `target` string from the start with `fill` string until the result reaches the specified `length`.

::: code-group

```ts [data-first]
padStart("hello", 10, " "); // "     hello"
```

```ts [data-last]
pipe("hello", padStart(10, " ")); // "     hello"
```

:::
