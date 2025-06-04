# indexOfOrThrow

`indexOfOrThrow(target, source)`

Returns the index of the first occurrence of `source` string in `target` string, or throws an error if not found.

::: code-group

```ts [data-first]
indexOfOrThrow("hello world", "world"); // 6
indexOfOrThrow("hello world", "foo"); // throws FnError
```

```ts [data-last]
pipe("hello world", indexOfOrThrow("world")); // 6
pipe("hello world", indexOfOrThrow("foo")); // throws FnError
```

:::
