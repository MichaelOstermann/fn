# prepend

`prepend(target, source)`

Prepends `string` or strings from `source` iterable to the beginning of `target` string.

::: code-group

```ts [data-first]
prepend("world", "hello "); // "hello world"
prepend("world", ["hello", " "]); // "hello world"
```

```ts [data-last]
pipe("world", prepend("hello ")); // "hello world"
pipe("world", prepend(["hello", " "])); // "hello world"
```

:::
