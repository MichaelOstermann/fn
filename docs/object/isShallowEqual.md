# isShallowEqual

`isShallowEqual(target, source)`

Performs a shallow equality comparison between `target` and `source` objects.

::: code-group

```ts [data-first]
isShallowEqual({ a: 1, b: 2 }, { a: 1, b: 2 }); // true
isShallowEqual({ a: 1, b: 2 }, { a: 1, b: 3 }); // false
```

```ts [data-last]
pipe({ a: 1, b: 2 }, isShallowEqual({ a: 1, b: 2 })); // true
pipe({ a: 1, b: 2 }, isShallowEqual({ a: 1, b: 3 })); // false
```

:::
