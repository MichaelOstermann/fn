# mapMerge

`mapMerge(target, map)`

Merges `target` object with the result of calling `map` function on `target`, creating a new object with existing keys updated.

::: code-group

```ts [data-first]
mapMerge({ a: 1, b: 2 }, (obj) => ({ a: obj.a * 2 })); // { a: 2, b: 2 }
```

```ts [data-last]
pipe(
    { a: 1, b: 2 },
    mapMerge((obj) => ({ a: obj.a * 2 })),
); // { a: 2, b: 2 }
```

:::
