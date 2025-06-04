# ifElse

`ifElse(predicate, onTrue, onFalse)`

Conditionally applies one of two functions based on a predicate result.

::: code-group

```ts [data-first]
ifElse(
    5,
    (x) => x > 3,
    (x) => x * 2,
    (x) => x * 3,
); // 10
```

```ts [data-last]
pipe(
    5,
    ifElse(
        (x) => x > 3,
        (x) => x * 2,
        (x) => x * 3,
    ),
); // 10
```

:::
