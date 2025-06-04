# slice

`slice(target, start, end)`

Extracts a section of `target` string from `start` index to `end` index (exclusive).

::: code-group

```ts [data-first]
slice("hello world", 0, 5); // "hello"
slice("hello world", 6, 11); // "world"
```

```ts [data-last]
pipe("hello world", slice(0, 5)); // "hello"
pipe("hello world", slice(6, 11)); // "world"
```

:::
