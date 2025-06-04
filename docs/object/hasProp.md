# hasProp

`hasProp(target, key)`

Checks if `target` object has the specified `key` property with a non-null and non-undefined value.

::: code-group

```ts [data-first]
hasProp({ a: 1, b: null }, "a"); // true
hasProp({ a: 1, b: null }, "b"); // false
```

```ts [data-last]
pipe({ a: 1, b: null }, hasProp("a")); // true
pipe({ a: 1, b: null }, hasProp("b")); // false
```

:::
