# slice

`slice(target, start, end?)`

Extracts a section of `target` string from `start` index to `end` index (exclusive). If `end` is not provided, extracts to the end of the string.

::: code-group

```ts [data-first]
slice("hello world", 0, 5); // "hello"
slice("hello world", 6, 11); // "world"
slice("hello world", 6); // "world"
```

```ts [data-last]
pipe("hello world", slice(0, 5)); // "hello"
pipe("hello world", slice(6, 11)); // "world"
pipe("hello world", slice(6)); // "world"
```

:::
