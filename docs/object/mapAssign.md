# mapAssign

`mapAssign(target, map)`

Merges `target` object with the result of calling `map` function on `target`, creating a new object.

Looser version of `mapMerge` - `mapAssign` allows you to redefine keys and add new properties.

::: code-group

```ts [data-first]
mapAssign({ a: 1, b: 2 }, (obj) => ({ c: obj.a + obj.b })); // { a: 1, b: 2, c: 3 }
```

```ts [data-last]
pipe(
    { a: 1, b: 2 },
    mapAssign((obj) => ({ c: obj.a + obj.b })),
); // { a: 1, b: 2, c: 3 }
```

:::
