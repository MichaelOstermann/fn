# hasKey

`hasKey(target, key)`

Checks if `target` object has the specified `key` property.

::: code-group

```ts [data-first]
hasKey({ a: 1, b: 2 }, "a"); // true
hasKey({ a: 1, b: 2 }, "c"); // false
```

```ts [data-last]
pipe({ a: 1, b: 2 }, hasKey("a")); // true
pipe({ a: 1, b: 2 }, hasKey("c")); // false
```

:::
