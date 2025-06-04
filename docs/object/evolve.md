# evolve

`evolve(target, props)`

Creates a new object with multiple properties transformed by their corresponding functions in the `props` object.

::: code-group

```ts [data-first]
evolve(
    { a: 1, b: 2, c: 3 },
    {
        a: (x) => x * 2,
        c: (x) => x + 1,
    },
); // { a: 2, b: 2, c: 4 }
```

```ts [data-last]
pipe(
    { a: 1, b: 2, c: 3 },
    evolve({
        a: (x) => x * 2,
        c: (x) => x + 1,
    }),
); // { a: 2, b: 2, c: 4 }
```

:::
