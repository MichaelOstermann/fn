# set

`set(target, key, value)`

Creates a new object with the `key` property set to `value`.

::: code-group

```ts [data-first]
set({ a: 1, b: 2 }, "a", 3); // { a: 3, b: 2 }
```

```ts [data-last]
pipe({ a: 1, b: 2 }, set("a", 3)); // { a: 3, b: 2 }
```

:::
