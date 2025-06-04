# orElse

`orElse(target, orElse)`

Returns the target value if it's not `null` or `undefined`, otherwise calls a fallback function and returns its result. The fallback function is only executed when the target is null or undefined.

::: code-group

```ts [data-first]
orElse(5, () => 10); // 5
orElse(null, () => 10); // 10
orElse(undefined, Math.random); // calls Math.random()
orElse(0, () => 10); // 0
```

```ts [data-last]
pipe(
    5,
    orElse(() => 10),
); // 5

pipe(
    null,
    orElse(() => 10),
); // 10
```

:::
