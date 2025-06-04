# merge

`merge(target, source)`

Merges properties from `source` object into `target` object.

::: code-group

```ts [data-first]
merge({ a: 1, b: 2 }, { a: 3, c: 4 }); // { a: 3, b: 2 }
```

```ts [data-last]
pipe({ a: 1, b: 2 }, merge({ a: 3, c: 4 })); // { a: 3, b: 2 }
```

:::
