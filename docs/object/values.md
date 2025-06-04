# values

`values(target)`

Returns an array of `target` object's enumerable property values.

::: code-group

```ts [data-first]
values({ a: 1, b: 2, c: 3 }); // [1, 2, 3]
```

```ts [data-last]
pipe({ a: 1, b: 2, c: 3 }, values()); // [1, 2, 3]
```

:::
