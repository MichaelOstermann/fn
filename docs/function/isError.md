# isError

`isError(target)`

Checks if a value is an Error instance.

::: code-group

```ts [data-first]
isError(new Error("test")); // true
isError("error message"); // false
```

```ts [data-last]
pipe(new Error("test"), isError()); // true
pipe("error message", isError()); // false
```

:::
