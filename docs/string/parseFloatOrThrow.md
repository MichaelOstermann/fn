# parseFloatOrThrow

`parseFloatOrThrow(target)`

Parses `target` string and returns a floating point number, or throws an error if parsing fails.

::: code-group

```ts [data-first]
parseFloatOrThrow("3.14"); // 3.14
parseFloatOrThrow("abc"); // throws FnError
```

```ts [data-last]
pipe("3.14", parseFloatOrThrow()); // 3.14
pipe("abc", parseFloatOrThrow()); // throws FnError
```

:::
