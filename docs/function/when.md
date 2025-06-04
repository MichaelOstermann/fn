# when

`when(predicate, onTrue)`

Conditionally transforms a value when the predicate is true, otherwise returns the original value.

::: code-group

```ts [data-first]
when(
    5,
    (x) => x > 3,
    (x) => x * 2,
); // 10

when(
    2,
    (x) => x > 3,
    (x) => x * 2,
); // 2
```

```ts [data-last]
pipe(
    5,
    when(
        (x) => x > 3,
        (x) => x * 2,
    ),
); // 10

pipe(
    2,
    when(
        (x) => x > 3,
        (x) => x * 2,
    ),
); // 2
```

:::
