# is

`is(target, key, value)`

Checks if the `key` property of `target` object is equal to the specified `value` using strict equality.

::: code-group

```ts [data-first]
is({ a: 1, b: 2 }, "a", 1); // true
is({ a: 1, b: 2 }, "a", 2); // false
```

```ts [data-last]
pipe({ a: 1, b: 2 }, is("a", 1)); // true
pipe({ a: 1, b: 2 }, is("a", 2)); // false
```

:::
