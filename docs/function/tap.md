# tap

`tap(fn)`

Executes a function with the provided value and returns the original value unchanged.

::: code-group

```ts [data-first]
tap(5, (x) => console.log(x)); // logs 5, returns 5
```

```ts [data-last]
pipe(
    5,
    tap((x) => console.log(x)),
); // logs 5, returns 5
```

:::
