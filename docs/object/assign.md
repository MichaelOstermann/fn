# assign

`assign(target, source)`

Merges properties from `source` object into `target` object, creating a new object.

Looser version of `merge` - `assign` allows you to redefine keys and add new properties.

::: code-group

```ts [data-first]
assign({ a: 1, b: 2 }, { b: 3, c: 4 }); // { a: 1, b: 3, c: 4 }
```

```ts [data-last]
pipe({ a: 1, b: 2 }, assign({ b: 3, c: 4 })); // { a: 1, b: 3, c: 4 }
```

:::
