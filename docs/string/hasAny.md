# hasAny

`hasAny(target, source)`

Checks if `target` string contains any of the strings from the `source` iterable.

::: code-group

```ts [data-first]
hasAny("hello world", ["foo", "world"]); // true
```

```ts [data-last]
pipe("hello world", hasAny(["foo", "world"])); // true
```

:::
