# hasNone

`hasNone(target, source)`

Checks if `target` string contains none of the strings from the `source` iterable.

::: code-group

```ts [data-first]
hasNone("hello world", ["foo", "bar"]); // true
```

```ts [data-last]
pipe("hello world", hasNone(["foo", "bar"])); // true
```

:::
