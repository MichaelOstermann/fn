# hasAll

`hasAll(target, source)`

Checks if `target` string contains all strings from the `source` iterable.

::: code-group

```ts [data-first]
hasAll("hello world", ["hello", "world"]); // true
```

```ts [data-last]
pipe("hello world", hasAll(["hello", "world"])); // true
```

:::
