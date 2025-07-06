# log

`log(...args)`

Logs the provided value along with optional arguments and returns the value unchanged.

::: code-group

```ts [data-first]
log("debug:", 42); // logs "debug: 42", returns 42
```

```ts [data-last]
pipe(42, log("processing:"), (x) => x * 2); // logs "processing: 42", returns 84
```

:::
