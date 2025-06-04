# get

`get(target, key)`

Returns the value of `key` property from `target` object, or undefined if not found.

::: code-group

```ts [data-first]
get({ a: 1, b: 2 }, "a"); // 1
get({ a: 1, b: 2 }, "c"); // undefined
```

```ts [data-last]
pipe({ a: 1, b: 2 }, get("a")); // 1
pipe({ a: 1, b: 2 }, get("c")); // undefined
```

:::
