# keys

`keys(target)`

Returns an array of `target` object's enumerable property names.

::: code-group

```ts [data-first]
keys({ a: 1, b: 2, c: 3 }); // ["a", "b", "c"]
```

```ts [data-last]
pipe({ a: 1, b: 2, c: 3 }, keys()); // ["a", "b", "c"]
```

:::
