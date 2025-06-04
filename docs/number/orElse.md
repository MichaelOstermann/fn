# orElse

`orElse(target, orElse)`

Returns the numeric value of `target` if it's a finite number, otherwise calls the `orElse` function with the original value and returns its result.

::: code-group

```ts [data-first]
orElse(42, () => 0); // 42
orElse(NaN, () => 0); // 0
orElse(Infinity, (val) => `Not finite: ${val}`); // "Not finite: Infinity"
orElse("hello", (val) => val.length); // 5
```

```ts [data-last]
pipe(
    42,
    orElse(() => 0),
); // 42

pipe(
    NaN,
    orElse(() => 0),
); // 0

pipe(
    Infinity,
    orElse((val) => `Not finite: ${val}`),
); // "Not finite: Infinity"

pipe(
    "hello",
    orElse((val) => val.length),
); // 5
```

:::
