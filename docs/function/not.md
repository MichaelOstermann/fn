# not

`not(predicate)`

Negates the result of a predicate function.

::: code-group

```ts [data-first]
not(5, (x) => x > 10); // true
not(15, (x) => x > 10); // false
```

```ts [data-last]
pipe(
    5,
    not((x) => x > 10),
); // true

pipe(
    15,
    not((x) => x > 10),
); // false
```

:::
