# orElse

`orElse(target, onRejected)`

Catches rejected promises and handles them with `onRejected`. This is an alias for `Promise.catch`.

::: code-group

```ts [data-first]
orElse(Promise.reject("error"), () => "fallback"); // Promise<"fallback">
```

```ts [data-last]
pipe(
    Promise.reject("error"),
    orElse(() => "fallback"),
); // Promise<"fallback">
```

:::
