# getOrElse

`getOrElse(target, key, orElse)`

Returns the value of `key` property from `target` object, or the result of calling `orElse` function with `target` if not found or falsy.

::: code-group

```ts [data-first]
getOrElse({ a: 1, b: 2 }, "a", () => 0); // 1
getOrElse({ a: 1, b: 2 }, "c", (obj) => Object.keys(obj).length); // 2
```

```ts [data-last]
pipe(
    { a: 1, b: 2 },
    getOrElse("a", () => 0),
); // 1

pipe(
    { a: 1, b: 2 },
    getOrElse("c", (obj) => Object.keys(obj).length),
); // 2
```

:::
