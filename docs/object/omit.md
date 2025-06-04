# omit

`omit(target, keys)`

Creates a new object excluding the properties specified in the `keys` iterable.

::: code-group

```ts [data-first]
omit({ a: 1, b: 2, c: 3 }, ["a", "c"]); // { b: 2 }
```

```ts [data-last]
pipe({ a: 1, b: 2, c: 3 }, omit(["a", "c"])); // { b: 2 }
```

:::
