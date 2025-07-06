# filter

`filter(target, predicate)`

Filters a value based on a predicate function. If the value is `null` or `undefined`, it returns the value unchanged. If the value satisfies the predicate, it returns the value. Otherwise, it returns `undefined`.

::: code-group

```ts [data-first]
filter(5, (x) => x > 3); // 5
filter(2, (x) => x > 3); // undefined
filter(null, (x) => x > 3); // null
filter(undefined, (x) => x > 3); // undefined
```

```ts [data-last]
pipe(
    5,
    filter((x) => x > 3),
); // 5

pipe(
    2,
    filter((x) => x > 3),
); // undefined
```

:::
