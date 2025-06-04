# entries

`entries(target)`

Returns an array of key-value pairs from `target` object.

::: code-group

```ts [data-first]
entries({ a: 1, b: 2, c: 3 }); // [["a", 1], ["b", 2], ["c", 3]]
```

```ts [data-last]
pipe({ a: 1, b: 2, c: 3 }, entries()); // [["a", 1], ["b", 2], ["c", 3]]
```

:::
