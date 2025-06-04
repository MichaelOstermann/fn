# pick

`pick(target, keys)`

Creates a new object containing only the properties specified in the `keys` iterable.

::: code-group

```ts [data-first]
pick({ a: 1, b: 2, c: 3 }, ["a", "c"]); // { a: 1, c: 3 }
```

```ts [data-last]
pipe({ a: 1, b: 2, c: 3 }, pick(["a", "c"])); // { a: 1, c: 3 }
```

:::
