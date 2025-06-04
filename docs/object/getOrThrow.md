# getOrThrow

`getOrThrow(target, key)`

Returns the value of `key` property from `target` object, or throws an error if not found or null/undefined.

::: code-group

```ts [data-first]
getOrThrow({ a: 1, b: 2 }, "a"); // 1
getOrThrow({ a: 1, b: 2 }, "c"); // throws FnError
```

```ts [data-last]
pipe({ a: 1, b: 2 }, getOrThrow("a")); // 1
pipe({ a: 1, b: 2 }, getOrThrow("c")); // throws FnError
```

:::
