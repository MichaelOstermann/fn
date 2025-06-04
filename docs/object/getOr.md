# getOr

`getOr(target, key, or)`

Returns the value of `key` property from `target` object, or the `or` value if not found or falsy.

::: code-group

```ts [data-first]
getOr({ a: 1, b: 2 }, "a", 0); // 1
getOr({ a: 1, b: 2 }, "c", 0); // 0
```

```ts [data-last]
pipe({ a: 1, b: 2 }, getOr("a", 0)); // 1
pipe({ a: 1, b: 2 }, getOr("c", 0)); // 0
```

:::
